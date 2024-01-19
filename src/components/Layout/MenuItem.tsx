import React from 'react';
import Link from 'next/link';

type MenuItemsProps = {
  url: string,
  text: string,
  Icon: React.ElementType,
  active: boolean
}

export default function MenuItem({ url, text, Icon, active }: MenuItemsProps){
  return (
    <Link role="menuitem" className={'group flex items-center px-2 py-1.5 rounded-md text-zinc-500 font-semibold w-full' + (active ? ' bg-indigo-100 text-zinc-700' : ' hover:bg-zinc-200 hover:text-zinc-700 duration-200')} href={url}>
      {<Icon className={"w-5 h-7 mr-2 text-zinc-400" + (active ? ' text-indigo-500' : ' group-hover:text-indigo-500')} />} {text}
    </Link>
  )
}