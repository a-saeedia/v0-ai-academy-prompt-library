"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import {
  Search,
  Moon,
  Sun,
  Heart,
  Copy,
  Check,
  Upload,
  Download,
  ChevronDown,
  ChevronUp,
  Wand2,
  Trash2,
  LogOut,
  FileJson,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { PROMPTS, INDUSTRIES, ROLES, translations } from "@/lib/constants"
import type { Language, View } from "@/lib/types"
import { useLocalStorage } from "@/lib/hooks/use-local-storage"
import { useDebounce } from "@/lib/hooks/use-debounce"
import { useKeyboardShortcuts } from "@/lib/hooks/use-keyboard-shortcuts"
import { EmptyState } from "@/components/empty-state"
import {
  generateJsonFromPrompt,
  customizePrompt,
  saveCustomPrompt,
  deleteCustomPrompt as deletePromptAction,
  signOutAction,
  shareToCommunity, // Added for sharing
  toggleLike, // Added for liking community prompts
} from "@/app/actions"
import type { User } from "@supabase/supabase-js"
import Image from "next/image"

interface LibraryClientProps {
  user: User | null
  initialCustomPrompts: any[]
  initialCommunityPrompts: any[] // Added for community prompts
  initialUserLikes: string[] // Added for user likes
}

export default function LibraryClient({
  user,
  initialCustomPrompts,
  initialCommunityPrompts, // Added for community prompts
  initialUserLikes, // Added for user likes
}: LibraryClientProps) {
  const router = useRouter()
  const [language, setLanguage] = useLocalStorage<Language>("language", "fa")
  const [currentView, setCurrentView] = useState<View>("library")
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({ industry: "All", role: "All" })
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", [])
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"newest" | "alphabetical" | "category">("newest")

  const [customPrompts, setCustomPrompts] = useState(initialCustomPrompts)
  const [communityPrompts, setCommunityPrompts] = useState(initialCommunityPrompts)
  const [userLikes, setUserLikes] = useState<string[]>(initialUserLikes)
  const [sharingPromptId, setSharingPromptId] = useState<string | null>(null)

  // Customizer state
  const [customizerOpen, setCustomizerOpen] = useState(false)
  const [selectedPrompt, setSelectedPrompt] = useState<any>(null)
  const [customizerForm, setCustomizerForm] = useState({ role: "", industry: "", goal: "", constraints: "" })
  const [customizing, setCustomizing] = useState(false)

  // JSON Generator state
  const [jsonInput, setJsonInput] = useState("")
  const [jsonOutput, setJsonOutput] = useState("")
  const [jsonError, setJsonError] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [jsonCopied, setJsonCopied] = useState(false)

  const debouncedSearch = useDebounce(searchTerm, 300)
  const t = translations[language]

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(PROMPTS.map((p) => p.category)))
    return ["All", ...uniqueCategories.sort()]
  }, [])

  useKeyboardShortcuts({
    "Ctrl+k": () => document.getElementById("search-input")?.focus(),
    "Ctrl+/": () => setCurrentView(currentView === "library" ? "generator" : "library"),
  })

  if (typeof document !== "undefined") {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const filteredPrompts = useMemo(() => {
    const filtered = PROMPTS.filter((prompt) => {
      const matchesSearch =
        debouncedSearch === "" ||
        prompt[`title_${language}`].toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        prompt[`tags_${language}`].some((tag) => tag.toLowerCase().includes(debouncedSearch.toLowerCase()))

      const matchesIndustry = filters.industry === "All" || prompt.industry === filters.industry
      const matchesRole = filters.role === "All" || prompt.role === filters.role
      const matchesCategory = categoryFilter === "All" || prompt.category === categoryFilter

      return matchesSearch && matchesIndustry && matchesRole && matchesCategory
    })

    if (sortBy === "alphabetical") {
      filtered.sort((a, b) => a[`title_${language}`].localeCompare(b[`title_${language}`]))
    } else if (sortBy === "category") {
      filtered.sort((a, b) => a.category.localeCompare(b.category))
    }

    return filtered
  }, [debouncedSearch, filters, categoryFilter, language, sortBy])

  const filteredCustomPrompts = useMemo(() => {
    return customPrompts.filter((prompt) => {
      const matchesSearch =
        debouncedSearch === "" ||
        prompt.title_en.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        prompt.title_fa.toLowerCase().includes(debouncedSearch.toLowerCase())

      return matchesSearch
    })
  }, [debouncedSearch, customPrompts])

  const filteredCommunityPrompts = useMemo(() => {
    return communityPrompts.filter((prompt) => {
      const matchesSearch =
        debouncedSearch === "" ||
        prompt.title_en.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        prompt.title_fa.toLowerCase().includes(debouncedSearch.toLowerCase())

      return matchesSearch
    })
  }, [debouncedSearch, communityPrompts])

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedCards(newExpanded)
  }

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const openCustomizer = (prompt: (typeof PROMPTS)[0]) => {
    if (!user) {
      alert(language === "en" ? "Please sign in to customize prompts" : "لطفاً برای سفارشی‌سازی پرامپت وارد شوید")
      router.push("/auth/login")
      return
    }
    setSelectedPrompt(prompt)
    setCustomizerOpen(true)
    setCustomizerForm({ role: "", industry: "", goal: "", constraints: "" })
  }

  const handleCustomize = async () => {
    if (!selectedPrompt || !customizerForm.role || !customizerForm.industry || !customizerForm.goal) return

    setCustomizing(true)
    const result = await customizePrompt(selectedPrompt[`prompt_${language}`] || "", customizerForm)

    if (result.success && result.data) {
      const saveResult = await saveCustomPrompt({
        title_en: selectedPrompt.title_en,
        title_fa: selectedPrompt.title_fa,
        prompt_en: language === "en" ? result.data : selectedPrompt.prompt_en,
        prompt_fa: language === "fa" ? result.data : selectedPrompt.prompt_fa,
        category: selectedPrompt.category,
        industry: customizerForm.industry,
      })

      if (saveResult.success && saveResult.data) {
        setCustomPrompts([saveResult.data, ...customPrompts])
        setCustomizerOpen(false)
        setCurrentView("custom")
      }
    }

    setCustomizing(false)
  }

  const deleteCustomPrompt = async (id: string) => {
    if (!user) return
    const result = await deletePromptAction(id)
    if (result.success) {
      setCustomPrompts(customPrompts.filter((p) => p.id !== id))
    }
  }

  const handleGenerateJson = async () => {
    if (!jsonInput.trim()) return

    setIsGenerating(true)
    setJsonError("")
    setJsonOutput("")

    const result = await generateJsonFromPrompt(jsonInput)

    if (result.success && result.data) {
      setJsonOutput(JSON.stringify(result.data, null, 2))
    } else {
      setJsonError(result.error || t.errorMessage)
    }

    setIsGenerating(false)
  }

  const copyJsonToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput)
    setJsonCopied(true)
    setTimeout(() => setJsonCopied(false), 2000)
  }

  const downloadJson = () => {
    const blob = new Blob([jsonOutput], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "prompt.json"
    a.click()
  }

  const convertPromptToJson = async (promptText: string) => {
    setCurrentView("generator")
    setJsonInput(promptText)
    setTimeout(() => handleGenerateJson(), 100)
  }

  const handleSignOut = async () => {
    await signOutAction()
    router.push("/library")
  }

  const exportData = () => {
    const data = { favorites, language, darkMode, customPrompts }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "tethera-library-data.json"
    a.click()
  }

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        if (data.favorites) setFavorites(data.favorites)
        if (data.language) setLanguage(data.language)
        if (typeof data.darkMode === "boolean") setDarkMode(data.darkMode)
      } catch (error) {
        console.error("Error importing data:", error)
      }
    }
    reader.readAsText(file)
  }

  const renderPromptText = (text: string | undefined) => {
    if (!text) return <p className="text-slate-600 dark:text-slate-400">No content available</p>

    return text.split("\n").map((line, index) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        )
      }
      return (
        <p key={index} className="text-slate-600 dark:text-slate-400 mb-2">
          {line}
        </p>
      )
    })
  }

  const handleShareToCommunity = async (promptId: string) => {
    if (!user) {
      alert(language === "en" ? "Please sign in to share prompts" : "لطفاً برای اشتراک‌گذاری پرامپت وارد شوید")
      router.push("/auth/login")
      return
    }

    setSharingPromptId(promptId)
    const result = await shareToCommunity(promptId)

    if (result.success && result.data) {
      setCommunityPrompts([result.data, ...communityPrompts])
      alert(
        language === "en"
          ? "Prompt shared with community successfully!"
          : "پرامپت با موفقیت با جامعه به اشتراک گذاشته شد!",
      )
    } else {
      alert(language === "en" ? "Failed to share prompt" : "اشتراک‌گذاری پرامپت ناموفق بود")
    }

    setSharingPromptId(null)
  }

  const handleToggleLike = async (promptId: string) => {
    if (!user) {
      alert(language === "en" ? "Please sign in to like prompts" : "لطفاً برای پسندیدن پرامپت وارد شوید")
      router.push("/auth/login")
      return
    }

    const result = await toggleLike(promptId)

    if (result.success) {
      if (result.liked) {
        setUserLikes([...userLikes, promptId])
      } else {
        setUserLikes(userLikes.filter((id) => id !== promptId))
      }

      // Update the likes count in the community prompts
      setCommunityPrompts(
        communityPrompts.map((p) =>
          p.id === promptId ? { ...p, likes_count: p.likes_count + (result.liked ? 1 : -1) } : p,
        ),
      )
    }
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#afd700]/5 via-background to-[#afd700]/10 transition-colors ${language === "fa" ? "rtl font-pinar" : "ltr"}`}
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-[#afd700]/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="https://tethera.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image src="/tethera-logo.png" alt="Tethera" width={120} height={40} className="h-10 w-auto" priority />
              <div>
                <p className="text-xs text-muted-foreground">{t.appName}</p>
              </div>
            </a>

            <nav className="flex items-center gap-2">
              <Button
                variant={currentView === "library" ? "default" : "ghost"}
                onClick={() => setCurrentView("library")}
                className={
                  currentView === "library" ? "bg-[#afd700] hover:bg-[#8fb600] text-black" : "hover:bg-[#afd700]/10"
                }
              >
                {t.promptLibrary}
              </Button>
              {user && (
                <Button
                  variant={currentView === "custom" ? "default" : "ghost"}
                  onClick={() => setCurrentView("custom")}
                  className={
                    currentView === "custom" ? "bg-[#afd700] hover:bg-[#8fb600] text-black" : "hover:bg-[#afd700]/10"
                  }
                >
                  {t.myPrompts}
                  {customPrompts.length > 0 && (
                    <Badge className="ml-2 bg-black text-[#afd700]">{customPrompts.length}</Badge>
                  )}
                </Button>
              )}
              <Button
                variant={currentView === "community" ? "default" : "ghost"}
                onClick={() => setCurrentView("community")}
                className={
                  currentView === "community" ? "bg-[#afd700] hover:bg-[#8fb600] text-black" : "hover:bg-[#afd700]/10"
                }
              >
                {t.communityPrompts}
                {communityPrompts.length > 0 && (
                  <Badge className="ml-2 bg-black text-[#afd700]">{communityPrompts.length}</Badge>
                )}
              </Button>
              <Button
                variant={currentView === "generator" ? "default" : "ghost"}
                onClick={() => setCurrentView("generator")}
                className={
                  currentView === "generator" ? "bg-[#afd700] hover:bg-[#8fb600] text-black" : "hover:bg-[#afd700]/10"
                }
              >
                {t.jsonGenerator}
              </Button>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-[#afd700]/10"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                onClick={() => setLanguage(language === "en" ? "fa" : "en")}
                className="hover:bg-[#afd700]/10"
              >
                {language === "en" ? "فارسی" : "English"}
              </Button>
              {user ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSignOut}
                  className="hover:bg-red-500/10 hover:text-red-500"
                  title={t.signOut}
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={() => router.push("/auth/login")}
                  className="bg-[#afd700] hover:bg-[#8fb600] text-black"
                >
                  {language === "en" ? "Sign In" : "ورود"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentView === "library" ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-[#afd700]/20 p-6 sticky top-24 shadow-sm">
                <div className="mb-6 p-4 bg-gradient-to-br from-[#afd700]/10 to-[#afd700]/5 rounded-lg border border-[#afd700]/20">
                  <div className="text-center">
                    <p className="text-sm text-[#afd700] dark:text-[#afd700] mb-1 font-semibold">{t.promptCount}</p>
                    <p className="text-3xl font-black text-[#afd700]">{PROMPTS.length}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">{t.filterByIndustry}</h3>
                  <div className="flex flex-col gap-2 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                    {INDUSTRIES.map((industry) => (
                      <Button
                        key={industry}
                        variant={filters.industry === industry ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setFilters({ ...filters, industry })}
                        className={`justify-start flex-shrink-0 ${
                          filters.industry === industry
                            ? "bg-[#afd700] hover:bg-[#8fb600] text-black"
                            : "hover:bg-[#afd700]/10"
                        }`}
                      >
                        {industry}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">{t.filterByRole}</h3>
                  <div className="flex flex-col gap-2 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                    {ROLES.map((role) => (
                      <Button
                        key={role}
                        variant={filters.role === role ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setFilters({ ...filters, role })}
                        className={`justify-start flex-shrink-0 ${
                          filters.role === role ? "bg-[#afd700] hover:bg-[#8fb600] text-black" : "hover:bg-[#afd700]/10"
                        }`}
                      >
                        {role}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setFilters({ industry: "All", role: "All" })
                    setCategoryFilter("All")
                  }}
                  className="w-full border-[#afd700]/20 hover:bg-[#afd700]/10"
                >
                  {t.clearFilters}
                </Button>

                <div className="mt-6 pt-6 border-t border-[#afd700]/20">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={exportData}
                    className="w-full justify-start mb-2 hover:bg-[#afd700]/10"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t.exportData}
                  </Button>
                  <label className="w-full">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start cursor-pointer hover:bg-[#afd700]/10"
                    >
                      <span>
                        <Upload className="h-4 w-4 mr-2" />
                        {t.importData}
                      </span>
                    </Button>
                    <input type="file" accept=".json" onChange={importData} className="hidden" />
                  </label>
                </div>
              </div>
            </aside>

            {/* Prompts Grid */}
            <div className="flex-1">
              <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="search-input"
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white dark:bg-slate-900 border-[#afd700]/20 focus:border-[#afd700]"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 rounded-md border border-[#afd700]/20 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:border-[#afd700] focus:outline-none"
                >
                  <option value="newest">{t.newest}</option>
                  <option value="alphabetical">{t.alphabetical}</option>
                  <option value="category">{t.category}</option>
                </select>
              </div>

              <div className="mb-6 -mx-4 px-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#afd700] scrollbar-track-transparent">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={categoryFilter === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCategoryFilter(category)}
                      className={`whitespace-nowrap flex-shrink-0 ${
                        categoryFilter === category
                          ? "bg-[#afd700] hover:bg-[#8fb600] text-black border-[#afd700]"
                          : "border-[#afd700]/20 hover:bg-[#afd700]/10"
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {filteredPrompts.length === 0 ? (
                <EmptyState title={t.noResults} description={t.noResultsDesc} />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPrompts.map((prompt, index) => {
                    const isExpanded = expandedCards.has(prompt.id)
                    const isFavorite = favorites.includes(prompt.id)
                    const isCopied = copiedId === prompt.id

                    return (
                      <div
                        key={prompt.id}
                        className="bg-white dark:bg-slate-900 rounded-lg border border-[#afd700]/20 p-6 hover:shadow-lg hover:shadow-[#afd700]/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <Badge className="bg-[#afd700]/10 text-[#afd700] border-[#afd700]/20">
                            {prompt.category}
                          </Badge>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => convertPromptToJson(prompt[`prompt_${language}`] || "")}
                              className="text-slate-400 hover:text-[#afd700] hover:bg-[#afd700]/10"
                              title={t.convertToJson}
                            >
                              <FileJson className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => openCustomizer(prompt)}
                              className="text-slate-400 hover:text-[#afd700] hover:bg-[#afd700]/10"
                              title={t.customizePrompt}
                            >
                              <Wand2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleFavorite(prompt.id)}
                              className={
                                isFavorite
                                  ? "text-red-500 hover:bg-red-500/10"
                                  : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                              }
                            >
                              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                            </Button>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                          {prompt[`title_${language}`]}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                          {language === "en" ? prompt.title_fa : prompt.title_en}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {prompt[`tags_${language}`].slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-[#afd700]/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {isExpanded && (
                          <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg max-h-96 overflow-y-auto custom-scrollbar">
                            {renderPromptText(prompt[`prompt_${language}`])}
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleExpanded(prompt.id)}
                            className="flex-1 border-[#afd700]/20 hover:bg-[#afd700]/10"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="h-4 w-4 mr-2" />
                                {t.showLess}
                              </>
                            ) : (
                              <>
                                <ChevronDown className="h-4 w-4 mr-2" />
                                {t.showDetails}
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(prompt[`prompt_${language}`] || "", prompt.id)}
                            className="flex-1 border-[#afd700]/20 hover:bg-[#afd700]/10"
                          >
                            {isCopied ? (
                              <>
                                <Check className="h-4 w-4 mr-2" />
                                {t.copied}
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-2" />
                                {t.copyPrompt}
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        ) : currentView === "custom" ? (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">{t.myPrompts}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t.noCustomPromptsDesc}</p>
            </div>

            {filteredCustomPrompts.length === 0 ? (
              <EmptyState title={t.noCustomPrompts} description={t.noCustomPromptsDesc} />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCustomPrompts.map((prompt, index) => {
                  const isExpanded = expandedCards.has(prompt.id)
                  const isCopied = copiedId === prompt.id
                  const promptText = language === "en" ? prompt.prompt_en : prompt.prompt_fa
                  const isSharing = sharingPromptId === prompt.id

                  return (
                    <div
                      key={prompt.id}
                      className="bg-white dark:bg-slate-900 rounded-lg border border-[#afd700]/20 p-6 hover:shadow-lg hover:shadow-[#afd700]/10 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-[#afd700]/10 text-[#afd700] border-[#afd700]/20">{prompt.category}</Badge>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleShareToCommunity(prompt.id)}
                            disabled={isSharing}
                            className="text-slate-400 hover:text-[#afd700] hover:bg-[#afd700]/10"
                            title={t.shareWithCommunity}
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteCustomPrompt(prompt.id)}
                            className="text-slate-400 hover:text-red-500 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {language === "en" ? prompt.title_en : prompt.title_fa}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                        {new Date(prompt.created_at).toLocaleDateString()}
                      </p>

                      {isExpanded && (
                        <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg max-h-96 overflow-y-auto custom-scrollbar">
                          {renderPromptText(promptText)}
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleExpanded(prompt.id)}
                          className="flex-1 border-[#afd700]/20 hover:bg-[#afd700]/10"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-2" />
                              {t.showLess}
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-2" />
                              {t.showDetails}
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(promptText || "", prompt.id)}
                          className="flex-1 border-[#afd700]/20 hover:bg-[#afd700]/10"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-4 w-4 mr-2" />
                              {t.copied}
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              {t.copyPrompt}
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : currentView === "community" ? (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">{t.communityPrompts}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t.noCommunityPromptsDesc}</p>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white dark:bg-slate-900 border-[#afd700]/20 focus:border-[#afd700]"
                />
              </div>
            </div>

            {filteredCommunityPrompts.length === 0 ? (
              <EmptyState title={t.noCommunityPrompts} description={t.noCommunityPromptsDesc} />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCommunityPrompts.map((prompt, index) => {
                  const isExpanded = expandedCards.has(prompt.id)
                  const isCopied = copiedId === prompt.id
                  const isLiked = userLikes.includes(prompt.id)
                  const promptText = language === "en" ? prompt.prompt_en : prompt.prompt_fa

                  return (
                    <div
                      key={prompt.id}
                      className="bg-white dark:bg-slate-900 rounded-lg border border-[#afd700]/20 p-6 hover:shadow-lg hover:shadow-[#afd700]/10 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-[#afd700]/10 text-[#afd700] border-[#afd700]/20">{prompt.category}</Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleToggleLike(prompt.id)}
                          className={
                            isLiked
                              ? "text-red-500 hover:bg-red-500/10"
                              : "text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }
                          title={isLiked ? t.unlike : t.like}
                        >
                          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                        </Button>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {language === "en" ? prompt.title_en : prompt.title_fa}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        {t.sharedBy} {prompt.author_email}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                        {prompt.likes_count || 0} {t.likes} • {new Date(prompt.created_at).toLocaleDateString()}
                      </p>

                      {isExpanded && (
                        <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg max-h-96 overflow-y-auto custom-scrollbar">
                          {renderPromptText(promptText)}
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleExpanded(prompt.id)}
                          className="flex-1 border-[#afd700]/20 hover:bg-[#afd700]/10"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-2" />
                              {t.showLess}
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-2" />
                              {t.showDetails}
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(promptText || "", prompt.id)}
                          className="flex-1 border-[#afd700]/20 hover:bg-[#afd700]/10"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-4 w-4 mr-2" />
                              {t.copied}
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              {t.copyPrompt}
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">{t.generatorTitle}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t.generatorSubtitle}</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg border border-[#afd700]/20 p-8 shadow-sm">
              <Textarea
                placeholder={t.inputPlaceholder}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="min-h-[150px] mb-4 bg-white dark:bg-slate-900 border-[#afd700]/20 focus:border-[#afd700]"
              />

              <Button
                onClick={handleGenerateJson}
                disabled={isGenerating || !jsonInput.trim()}
                className="w-full bg-[#afd700] hover:bg-[#8fb600] text-black"
              >
                {isGenerating ? t.generating : t.generateButton}
              </Button>

              {jsonError && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
                  {jsonError}
                </div>
              )}

              {jsonOutput && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{t.jsonOutput}</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyJsonToClipboard}
                        className="border-[#afd700]/20 hover:bg-[#afd700]/10 bg-transparent"
                      >
                        {jsonCopied ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            {t.copied}
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            {t.copyJson}
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={downloadJson}
                        className="border-[#afd700]/20 hover:bg-[#afd700]/10 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {t.downloadJson}
                      </Button>
                    </div>
                  </div>
                  <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto custom-scrollbar">
                    <code>{jsonOutput}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Dialog open={customizerOpen} onOpenChange={setCustomizerOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-[#afd700]">{t.customizePrompt}</DialogTitle>
            <DialogDescription>{selectedPrompt && selectedPrompt[`title_${language}`]}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">{t.enterRole}</label>
              <Input
                value={customizerForm.role}
                onChange={(e) => setCustomizerForm({ ...customizerForm, role: e.target.value })}
                placeholder="e.g., Senior Marketing Manager"
                className="border-[#afd700]/20 focus:border-[#afd700]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                {t.enterIndustry}
              </label>
              <Input
                value={customizerForm.industry}
                onChange={(e) => setCustomizerForm({ ...customizerForm, industry: e.target.value })}
                placeholder="e.g., SaaS, E-commerce"
                className="border-[#afd700]/20 focus:border-[#afd700]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">{t.enterGoal}</label>
              <Textarea
                value={customizerForm.goal}
                onChange={(e) => setCustomizerForm({ ...customizerForm, goal: e.target.value })}
                placeholder="e.g., Increase conversion rate by 25%"
                className="min-h-[80px] border-[#afd700]/20 focus:border-[#afd700]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                {t.enterConstraints}
              </label>
              <Textarea
                value={customizerForm.constraints}
                onChange={(e) => setCustomizerForm({ ...customizerForm, constraints: e.target.value })}
                placeholder="e.g., Limited budget, 3-month timeline"
                className="min-h-[80px] border-[#afd700]/20 focus:border-[#afd700]"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setCustomizerOpen(false)} className="flex-1 border-[#afd700]/20">
              {t.cancel}
            </Button>
            <Button
              onClick={handleCustomize}
              disabled={customizing || !customizerForm.role || !customizerForm.industry || !customizerForm.goal}
              className="flex-1 bg-[#afd700] hover:bg-[#8fb600] text-black"
            >
              {customizing ? t.customizing : t.customize}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-[#afd700]/20 py-6 mt-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          {t.madeBy}{" "}
          <a
            href="https://a-corp.space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#afd700] hover:text-[#8fb600] font-semibold transition-colors"
          >
            A corp
          </a>
        </div>
      </footer>
    </div>
  )
}
