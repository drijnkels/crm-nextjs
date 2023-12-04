import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next';
import Image from "next/image";
import { convertDateString } from "@/scripts/utils";

import Section from "@/components/Layout/Section";
import Text from "@/components/Text/Text";
import TopicsTable from "@/components/Tables/TopicsTable";
import CommunitiesTable from "@/components/Tables/CommunitiesTable";

export const metadata: Metadata = {
  title: 'Users',
}

export default function Users() {
  const user = {
    name: 'David Rodriguez',
    email: 'david.rodriguez@email.com',
    avatar: '/images/profile/David.png',
    topics: [
      {title: 'Green Sourcing for a Bright Tomorrow', organisation: "EcoLogiX Solutions", community: "CollabNet", views: 9, collaborations: 6, status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
    ],
    communities: [
      {name: 'CollabNet', active: 'Active', created_on: convertDateString('2023-11-14 14:13:56'), url: '/communities/asdasdsaa'},
      {name: 'BusinessLink Pro', active: 'Active', created_on: convertDateString('2023-11-14 14:08:25'), url: '/communities/ghkjghjghj'},
    ]
  };

  const topic_headers = ['title', 'community', 'created_on', 'url'];
  const community_hears = ['name', 'active', 'joined_on', 'url'];

  return (
    <Layout page_name="Users" current_page="users" return_option={{label: "<- Back to users", url: '/users'}}>
      <div className='flex gap-8'>
        <Section>
          <div className='flex items-center gap-4'>
            <Image src={user.avatar} alt={user.name + ' avatar'} width="64" height="64" />
            <Text variant="heading1">{user.name}</Text>
          </div>
        </Section>
        <div>
          <div className="max-w-[450px] py-4 px-6 bg-zinc-100 rounded flex gap-4 whitespace-pre">
            Bio?
          </div>
        </div>
      </div>
      
      <TopicsTable title={'Topics created by ' + user.name} headers={topic_headers} rows={user.topics} />

      <CommunitiesTable title={"Communities " + user.name + ' is active in' } headers={community_hears} rows={user.communities} />
    </Layout>
  )
}