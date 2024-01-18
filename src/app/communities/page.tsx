import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import CommunitiesTable from "@/components/Tables/CommunitiesTable";
import {CommunityForTable, CommunityHeaderName} from "@/types/CommunityTypes";

export const metadata: Metadata = {
  title: 'Communities',
}

export default function Communities() {
  const communities: CommunityForTable[] = [
    {eid: 'asdasdsaa', name: 'CollabNet', num_topics: 9, num_organisations: 4, num_users: 14, url: '/communities/asdasdsaa'},
    {eid: 'ghkjghjghj', name: 'BusinessLink Pro', num_topics: 14, num_organisations: 2, num_users: 6, url: '/communities/ghkjghjghj'},
    {eid: 'rtyrtyrty', name: 'IndustryInsights', num_topics: 21, num_organisations: 8, num_users: 56, url: '/communities/rtyrtyrty'},
  ];

  const headers: Array<CommunityHeaderName> = ['name', 'num_topics', 'num_organisations', 'num_users', 'url'];

  return (
    <Layout page_name="Communities" current_page="communities" action={{label: 'Create', url: `/communities/new`}}>
      <CommunitiesTable title="Communities" headers={headers} rows={communities} loading_message="Loading communities" />
    </Layout>
  )
}