import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  return (
    <Layout page_name="Dashboard">
      Todo
    </Layout>
  )
}