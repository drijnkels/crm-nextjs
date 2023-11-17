import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
}

export default function Events() {
  return (
    <Layout page_name="Events" current_page="events">
    </Layout>
  )
}