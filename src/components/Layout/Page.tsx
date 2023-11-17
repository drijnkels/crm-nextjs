type PageProps = {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <div className="mt-[56px] px-6 py-20 w-full max-w-[100vw] mx-auto md:max-w-screen-lg flex flex-col gap-8">
      {children}
    </div>
  )
}