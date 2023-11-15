"use client";

import Layout from "@/components/Layout/Layout";

export default function Communities({ params }: { params: { id: string }}) {
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