type SettingProps = {
  label: string;
  active: boolean;
}
export default function Setting ({ label, active }: SettingProps) {
  return (
    <div className="flex items-center gap-2">
      {active ? (
        <div className="bg-emerald-300 text-emerald-700 px-2 py-1 rounded w-[80px] text-center text-sm">Active</div>
        ) : (
        <div className='bg-zinc-300 text-zinc-700 px-2 py-1 rounded w-[80px] text-center text-sm'>Not active</div>
        )} 
        <span>{label}</span>
    </div>
  )
}