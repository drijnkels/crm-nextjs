import MenuItem from "./MenuItem";
import { HomeIcon, UserGroupIcon, DocumentIcon, BuildingOfficeIcon, UserIcon, UserCircleIcon, ArrowLeftOnRectangleIcon  } from "@heroicons/react/24/solid";

export default function Menu({ current_page }: {current_page: string}){
  const menuItems = [
    {url: '/dashboard', text: 'Dashboard', icon: HomeIcon, active: (current_page === 'dashboard')},
    {url: '/communities', text: 'Communities', icon: UserGroupIcon, active: (current_page === 'communities')},
    {url: '/topics', text: 'Topics', icon: DocumentIcon, active: (current_page === 'topics')},
    // {url: '/collaborations', text: 'Collaborations', icon: DocumentCheckIcon, active: (current_page === 'collaborations')},
    {url: '/organisations', text: 'Organisations', icon: BuildingOfficeIcon, active: (current_page === 'organisations')},
    {url: '/users', text: 'Users', icon: UserIcon, active: (current_page === 'users')},
    // {url: '/events', text: 'Events', icon: TicketIcon, active: (current_page === 'events')},
  ]
  return(
    <menu role='menu' className="relative bg-zinc-50 h-screen w-[240px] flex flex-col border-r border-zinc-100 text-zinc-500 font-semibold text-[14px]">
      <div className="fixed w-[240px] h-full bg-zinc-50">
        <div className="px-2 h-[56px] flex items-center justify-center rounded-md border-b border-zinc-200">CRM</div>
        <div className="p-2 flex flex-col">
          { menuItems.map((item, index) => <MenuItem key={index} Icon={item.icon} url={item.url} text={item.text} active={item.active} />) }
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-[240px] p-2 flex flex-col">
        <MenuItem Icon={UserCircleIcon} url='/profile' text="Profile" active={current_page == 'profile'} />
        <MenuItem Icon={ArrowLeftOnRectangleIcon} url='/logout' text="Logout" active={false}/>
      </div>
    </menu>
  )
}