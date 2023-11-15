import Login from "@/components/Forms/Login"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Login</div>

        <Login />
      </div>
    </main>
  )
}
