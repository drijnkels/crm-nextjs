type PageProps = {
  children: React.ReactNode
}

export default function Section({ children }: PageProps) {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  )
}