import Head from "next/head";
import Menu from "./Menu";
import Header from "./Header";
import Page from "./Page"

type LayoutProps = {
  page_name: string,
  children: React.ReactNode
}

export default function Layout({ page_name, children }: LayoutProps) {
  return (
  <main className="flex min-h-screen">
    <Head>
      <title>{page_name}</title>
    </Head>
    <Menu />
    <div className="flex-1">
      <Header text={page_name} />
      <Page>
        {children}
      </Page>
    </div>
  </main>
  )
}