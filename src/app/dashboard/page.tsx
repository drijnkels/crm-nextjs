import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import CommunitiesTable from "@/components/Tables/CommunitiesTable";

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

  const communities = [
    {name: 'CollabNet', topics: 9, organisations: 4, users: 14, collaborations: 6, url: '/communities/asdasdsaa'},
    {name: 'BusinessLink Pro', topics: 14, organisations: 2, users: 6, collaborations: 0, url: '/communities/ghkjghjghj'},
    {name: 'IndustryInsights', topics: 21, organisations: 8, users: 56, collaborations: 12, url: '/communities/rtyrtyrty'},
  ];

  const headers = ['name', 'topics', 'organisations', 'users', 'url'];

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