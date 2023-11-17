import Menu from "./Menu";
import Header from "./Header";
import Page from "./Page"

type LayoutProps = {
  page_name: string,
  current_page: string,
  action?: {label: string, url: string};
  children: React.ReactNode
}

export default function Layout({ page_name, current_page, action, children }: LayoutProps) {
  return (
  <main className="flex min-h-screen">
    <Menu current_page={current_page} />
    <div className="flex-1">
      <Header text={page_name} />
      <Page action={action}>
        {children}
      </Page>
    </div>
  </main>
  )
}