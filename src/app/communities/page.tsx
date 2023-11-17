import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import CommunitiesTable from "@/components/Tables/CommunitiesTable";

export const metadata: Metadata = {
  title: 'Communities',
}

export default function Communities() {
  const communities = [
    {name: 'CollabNet', topics: 9, organisations: 4, users: 14, collaborations: 6, url: '/communities/asdasdsaa'},
    {name: 'BusinessLink Pro', topics: 14, organisations: 2, users: 6, collaborations: 0, url: '/communities/ghkjghjghj'},
    {name: 'IndustryInsights', topics: 21, organisations: 8, users: 56, collaborations: 12, url: '/communities/rtyrtyrty'},
  ];

  const headers = ['name', 'topics', 'organisations', 'users', 'url'];

  return (
    <Layout page_name="Communities" current_page="communities" action={{label: 'Create', url: `/communities/new`}}>
      <CommunitiesTable title="Communities" headers={headers} rows={communities} loading_message="Loading communities" />
    </Layout>
  )
}