"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function generateJsonFromPrompt(naturalPrompt: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object" as const,
          properties: {
            role: { type: "string" as const, description: "The role or persona for the AI" },
            goal: { type: "string" as const, description: "The main objective or goal" },
            tone: { type: "string" as const, description: "The desired tone of the response" },
            format: { type: "string" as const, description: "The expected format of the output" },
            constraints: {
              type: "array" as const,
              items: { type: "string" as const },
              description: "Any constraints or limitations",
            },
            language: { type: "string" as const, description: "The language for the response" },
          },
          required: ["role", "goal", "tone", "format"],
        },
      },
      systemInstruction:
        "You are an expert system that converts natural language user requests into a structured JSON object. Analyze the user's prompt and map its components to the provided JSON schema. Extract the role, goal, tone, format, constraints, and language from the user's description.",
    })

    const result = await model.generateContent(naturalPrompt)
    const text = result.response.text()
    return { success: true, data: JSON.parse(text) }
  } catch (error) {
    console.error("Error generating JSON:", error)
    return { success: false, error: "Failed to generate JSON" }
  }
}

export async function customizePrompt(
  promptText: string,
  userInfo: { role: string; industry: string; goal: string; constraints: string },
) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" })

    const customizationPrompt = `You are an expert prompt engineer. Customize the following prompt template for a specific user:

Original Prompt:
${promptText}

User Information:
- Role: ${userInfo.role}
- Industry: ${userInfo.industry}
- Specific Goal: ${userInfo.goal}
- Constraints: ${userInfo.constraints}

Please rewrite the prompt to be highly specific to this user's context. Keep the same structure but personalize all examples, metrics, and recommendations to their industry and role. Make it actionable and directly applicable to their situation.`

    const result = await model.generateContent(customizationPrompt)
    const customizedText = result.response.text()
    return { success: true, data: customizedText }
  } catch (error) {
    console.error("Error customizing prompt:", error)
    return { success: false, error: "Failed to customize prompt" }
  }
}

export async function saveCustomPrompt(data: {
  title_en: string
  title_fa: string
  prompt_en: string
  prompt_fa: string
  category: string
  industry: string
}) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return { success: false, error: "Not authenticated" }
    }

    const { data: savedPrompt, error } = await supabase
      .from("custom_prompts")
      .insert({
        user_id: user.id,
        title_en: data.title_en,
        title_fa: data.title_fa,
        prompt_en: data.prompt_en,
        prompt_fa: data.prompt_fa,
        category: data.category,
        industry: data.industry,
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath("/library")
    return { success: true, data: savedPrompt }
  } catch (error) {
    console.error("Error saving custom prompt:", error)
    return { success: false, error: "Failed to save prompt" }
  }
}

export async function deleteCustomPrompt(id: string) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return { success: false, error: "Not authenticated" }
    }

    const { error } = await supabase.from("custom_prompts").delete().eq("id", id).eq("user_id", user.id)

    if (error) throw error

    revalidatePath("/library")
    return { success: true }
  } catch (error) {
    console.error("Error deleting custom prompt:", error)
    return { success: false, error: "Failed to delete prompt" }
  }
}

export async function shareToCommunity(promptId: string) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return { success: false, error: "Not authenticated" }
    }

    // Get the custom prompt
    const { data: customPrompt, error: fetchError } = await supabase
      .from("custom_prompts")
      .select("*")
      .eq("id", promptId)
      .eq("user_id", user.id)
      .single()

    if (fetchError || !customPrompt) {
      return { success: false, error: "Prompt not found" }
    }

    // Share to community
    const { data: communityPrompt, error: shareError } = await supabase
      .from("community_prompts")
      .insert({
        user_id: user.id,
        author_email: user.email || "Anonymous",
        title_en: customPrompt.title_en,
        title_fa: customPrompt.title_fa,
        prompt_en: customPrompt.prompt_en,
        prompt_fa: customPrompt.prompt_fa,
        category: customPrompt.category,
        industry: customPrompt.industry,
      })
      .select()
      .single()

    if (shareError) throw shareError

    revalidatePath("/library")
    return { success: true, data: communityPrompt }
  } catch (error) {
    console.error("Error sharing to community:", error)
    return { success: false, error: "Failed to share prompt" }
  }
}

export async function getCommunityPrompts() {
  try {
    const supabase = await createClient()

    const { data: prompts, error } = await supabase
      .from("community_prompts")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    return { success: true, data: prompts || [] }
  } catch (error) {
    console.error("Error fetching community prompts:", error)
    return { success: false, error: "Failed to fetch community prompts", data: [] }
  }
}

export async function toggleLike(promptId: string) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return { success: false, error: "Not authenticated" }
    }

    // Check if already liked
    const { data: existingLike } = await supabase
      .from("community_prompt_likes")
      .select("id")
      .eq("user_id", user.id)
      .eq("prompt_id", promptId)
      .single()

    if (existingLike) {
      // Unlike
      await supabase.from("community_prompt_likes").delete().eq("id", existingLike.id)

      // Decrement likes count
      await supabase.rpc("decrement_likes", { prompt_id: promptId })
    } else {
      // Like
      await supabase.from("community_prompt_likes").insert({
        user_id: user.id,
        prompt_id: promptId,
      })

      // Increment likes count
      await supabase.rpc("increment_likes", { prompt_id: promptId })
    }

    revalidatePath("/library")
    return { success: true, liked: !existingLike }
  } catch (error) {
    console.error("Error toggling like:", error)
    return { success: false, error: "Failed to toggle like" }
  }
}

export async function getUserLikes() {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return { success: true, data: [] }
    }

    const { data: likes, error } = await supabase
      .from("community_prompt_likes")
      .select("prompt_id")
      .eq("user_id", user.id)

    if (error) throw error

    return { success: true, data: likes?.map((l) => l.prompt_id) || [] }
  } catch (error) {
    console.error("Error fetching user likes:", error)
    return { success: true, data: [] }
  }
}

export async function signOutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/auth/login")
}
