import { createClient } from "@/lib/supabase/server"
import LibraryClient from "@/components/library-client"
import { getCommunityPrompts, getUserLikes } from "@/app/actions"

export default async function LibraryPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch user's custom prompts only if user is logged in
  let customPrompts: any[] = []
  if (user) {
    const { data } = await supabase
      .from("custom_prompts")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
    customPrompts = data || []
  }

  const communityResult = await getCommunityPrompts()
  const communityPrompts = communityResult.data || []

  const likesResult = await getUserLikes()
  const userLikes = likesResult.data || []

  return (
    <LibraryClient
      user={user}
      initialCustomPrompts={customPrompts}
      initialCommunityPrompts={communityPrompts}
      initialUserLikes={userLikes}
    />
  )
}
