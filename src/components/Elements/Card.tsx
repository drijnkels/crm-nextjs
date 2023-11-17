export default function Button({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-white border shadow-md rounded-lg'>{children}</div>
  )
}