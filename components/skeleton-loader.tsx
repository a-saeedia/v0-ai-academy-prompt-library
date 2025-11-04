export function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 animate-pulse"
        >
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-4"></div>
          <div className="flex gap-2 mb-4">
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
          </div>
          <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
        </div>
      ))}
    </div>
  )
}
