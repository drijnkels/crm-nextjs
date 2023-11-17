export default function Tag ({ label }: {label: string}) {
  return (
    <div className="text-sm font-medium w-fit flex items-center gap-1 px-1.5 h-[24px] rounded-md border bg-sky-100 text-zinc-700 border-zinc-900/10">{label}</div>
  )
}