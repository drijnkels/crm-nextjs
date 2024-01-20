type HeaderProps = {
  text: string
}

export default function Header({ text }: HeaderProps){
  return (
    <header role='header' className='flex items-center justify-between z-50 border-b bg-white border-zinc-100 px-6 lg:px-12 h-[56px] gap-1 fixed w-[calc(100vw-240px)] shadow-sm shadow-zinc-950/5'>{text}</header>
  )
}