import Menu from "./Menu";
import Header from "./Header";
import Page from "./Page"
import Link from 'next/link';

type LayoutProps = {
  page_name: string,
  current_page: string,
  return_option?: {label: string, url: string},
  action?: {label: string, url: string};
  children: React.ReactNode,
}

export default function Layout({ page_name, current_page, return_option, action, children }: LayoutProps) {
  return (
  <main className="flex min-h-screen">
    <Menu current_page={current_page} />
    <div className="flex-1">
      <Header text={page_name} />
      <Page action={action}>
        {
          (return_option) ? <div><Link href={return_option.url} className="text-indigo-600">{return_option.label}</Link></div> : ''
        }
        {children}
      </Page>
    </div>
  </main>
  )
}