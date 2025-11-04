export interface Prompt {
  id: string
  title_en: string
  title_fa: string
  category: string
  industry: string
  role: string
  prompt_en: string
  prompt_fa: string
  tags_en: string[]
  tags_fa: string[]
}

export interface JsonPromptResult {
  role: string
  goal: string
  tone: string
  format: string
  constraints?: string[]
  language?: string
}

export type Language = "en" | "fa"
export type View = "library" | "generator" | "custom" | "community"

export interface CustomPrompt extends Prompt {
  createdAt: string
  isCustomized: boolean
  originalPromptId?: string
}
