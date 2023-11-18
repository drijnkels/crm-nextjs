import PageAction from "../Elements/PageAction";
import FlashMessages from "../Elements/FlashMessages/FlashMessages";

type PageProps = {
  children: React.ReactNode,
  action?: {label: string, url: string}
}

export default function Page({ children, action }: PageProps) {
  return (
    <div className="relative mt-[56px] px-6 py-20 w-full max-w-[100vw] mx-auto md:max-w-screen-lg flex flex-col gap-8">
      {
        (action) ? <PageAction label={action.label} url={action.url} /> : ''
      }
      {children}
      <FlashMessages />
    </div>
  )
}