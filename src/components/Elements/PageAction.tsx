import Link from "next/link"

export default function PageAction ({ label, url }: {label: string, url: string}){
  return (
    <div className="absolute right-0 top-[56px]">
      <Link href={url} className="px-2 h-[36px] min-w-[100px] rounded whitespace-nowrap relative focus:outline-none focus:ring-4 gap-1.5 border font-medium transition-colors flex items-center justify-center bg-indigo-500 dark:bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-600 duration-200 focus:ring-indigo-400/50 focus:border-indigo-400">
        {label}
      </Link>
    </div>
  )
}