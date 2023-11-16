import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manage community',
}

export default function Community({ params }: { params: { id: string }}) {
  const community = {
    eid: params.id,
    name: 'Community 1',
  }
  return (
    <Layout page_name={'Communities / ' + community.name}>
      Community eid: {community.eid}
    </Layout>
  )
}