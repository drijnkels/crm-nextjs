import React from 'react';
import Link from 'next/link';

type MenuItemsProps = {
  url: string,
  text: string,
  Icon: React.ElementType
}

export default function MenuItem({ url, text, Icon }: MenuItemsProps){
  return (
    <Link className='group flex items-center px-2 py-1.5 rounded-md text-zinc-500 font-semibold hover:bg-zinc-200 hover:text-zinc-700 duration-200' href={url}>
      {<Icon className="w-5 h-7 mr-2 text-zinc-400 group-hover:text-indigo-500" />} {text}
    </Link>
  )
}