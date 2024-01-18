import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import CommunitiesTable from "@/components/Tables/CommunitiesTable";
import {CommunityForTable, CommunityHeaderName} from "@/types/CommunityTypes";

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  const system_overview = [
    {label: 'Topics', number: 10},
    {label: 'Organisations', number: 6},
    {label: 'Users', number: 25},
    {label: 'Topics last 7 days', number: 4},
    {label: 'Topics last 30 days', number: 7},
    {label: 'Views', number: 321},
  ];

  const communities: CommunityForTable[] = [
    {eid: 'asdasdsaa', name: 'CollabNet', num_topics: 9, num_organisations: 4, num_users: 14, url: '/communities/asdasdsaa'},
    {eid: 'hkjghjghj', name: 'BusinessLink Pro', num_topics: 14, num_organisations: 2, num_users: 6, url: '/communities/ghkjghjghj'},
    {eid: 'rtyrtyrty', name: 'IndustryInsights', num_topics: 21, num_organisations: 8, num_users: 56, url: '/communities/rtyrtyrty'},
  ];

  const headers: Array<CommunityHeaderName> = ['name', 'num_topics', 'num_organisations', 'num_users', 'url'];

  return (
    <Layout page_name="Dashboard" current_page="dashboard">
      <div className='relative grid grid-cols-3 gap-12 py-8 px-8 bg-gradient-to-b shadow-lg shadow-zinc-950/10 from-indigo-300 via-indigo-200 to-indigo-100 border border-zinc-900 rounded-xl mb-8'>
        {
          system_overview.map( ( item, index ) => 
            <div key={index} className='text-center'>
              <p className='font-semibold text-3xl text-indigo-700'>{item.number}</p>
              <span className='leading-[20px] opacity-90'>{item.label}</span>
            </div>
          )
        }
      </div>
      <CommunitiesTable title="Communities" headers={headers} rows={communities} loading_message="Loading communities" />
    </Layout>
  )
}