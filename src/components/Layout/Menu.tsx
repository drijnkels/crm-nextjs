import MenuItem from "./MenuItem";
import { HomeIcon, UserGroupIcon, DocumentIcon, DocumentCheckIcon, BuildingOfficeIcon, UserIcon, TicketIcon } from "@heroicons/react/24/solid";

export default function Menu(){
  const menuItems = [
    {url: '/dashboard', text: 'Dashboard', icon: HomeIcon},
    {url: '/communities', text: 'Communities', icon: UserGroupIcon},
    {url: '/topics', text: 'Topics', icon: DocumentIcon},
    {url: '/collaborations', text: 'Collaborations', icon: DocumentCheckIcon},
    {url: '/organisations', text: 'Organisations', icon: BuildingOfficeIcon},
    {url: '/users', text: 'Users', icon: UserIcon},
    // {url: '/events', text: 'Events', icon: TicketIcon},
  ]
  return(
    <div className="bg-zinc-50 h-screen w-[240px] flex flex-col border-r border-zinc-100 text-zinc-500 font-semibold text-[14px]">
      <div className="fixed w-[240px] h-full bg-zinc-50">
        <div className="px-2 h-[56px] flex items-center justify-center rounded-md border-b border-zinc-200">CRM</div>
        <div className="p-2 flex flex-col">
          { menuItems.map((item, index) => <MenuItem key={index} Icon={item.icon} url={item.url} text={item.text} />) }
        </div>
      </div>
    </div>
  )
}