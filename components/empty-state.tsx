import { FileQuestion } from "lucide-react"

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-6 mb-4">
        <FileQuestion className="h-12 w-12 text-slate-400 dark:text-slate-500" />
      </div>
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-center max-w-md">{description}</p>
    </div>
  )
}
