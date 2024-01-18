import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from "@/components/Layout/Layout";
import Section from '@/components/Layout/Section';
import Text from '@/components/Text/Text';
import TopicsTable from '@/components/Tables/TopicsTable';
import UsersTable from '@/components/Tables/UsersTable';
import CommunitiesTable from '@/components/Tables/CommunitiesTable';
import { convertDateString, setAddress } from "@/scripts/utils";
import {UserHeaderName} from "@/types/UserTypes";
import {TopicHeaderName, TopicTableHeaders} from "@/types/TopicTypes";
import {CommunityHeaderName} from "@/types/CommunityTypes";

export const metadata: Metadata = {
  title: 'Organisations',
}

export default function Organisation() {
  const organisation = {
    eid: 'knrbpkdwne',
    name: 'EcoLogiX Solutions',
    street: '124 Fulton St',
    city: 'New York',
    state: 'NY',
    postal: '10038',
    province: '',
    country: 'USA',
    email: 'info@ecologixsolutions.com',
    web: 'https://www.ecologixsolutions.com/',
    phone: '+12122670860',
    description: 'Empowering Business Excellence Through Green Innovations',
    topics: [
      {title: 'Green Sourcing for a Bright Tomorrow', organisation_name: "EcoLogiX Solutions", community_name: "CollabNet", views: 9, collaborations: 6, status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
    ],
    users: [
      {name: 'David Rodriguez', email: 'david.rodriguez@email.com', url: '/organisations/jdatsxezfh'},
      {name: 'Sarah Johnson', email: 's.johnson@email.com', url: '/organisations/jzthhamhka'},
    ],
    communities: [
      {name: 'CollabNet', active: 'Active', created_on: convertDateString('2023-11-14 14:13:56'), url: '/communities/asdasdsaa'},
      {name: 'BusinessLink Pro', active: 'Active', created_on: convertDateString('2023-11-14 14:08:25'), url: '/communities/ghkjghjghj'},
    ]
  };

  const topic_headers: Array<TopicHeaderName> = ['title', 'community_name', 'created_on', 'url'];
  const user_headers: Array<UserHeaderName> = ['name', 'email', 'url'];
  const community_hears: Array<CommunityHeaderName> = ['name', 'active', 'joined_on', 'url'];

  return (
    <Layout page_name="Organisations" current_page="organisations" action={{label: 'Edit', url: `/organisations/${organisation.eid}/edit`}} return_option={{label: "<- Back to organisations", url: '/organisations'}}>
      <div className='flex gap-8'>
        <Section>
          <div className='flex items-center gap-4'>
            <Image src="/images/ecologic-solutions.png" alt="Logo for EcoLogiX Solutions" width="64" height="64" />
            <Text variant="heading1">{organisation.name}</Text>
          </div>
          {organisation.description}
        </Section>
        <div>
          <div className="max-w-[450px] py-4 px-6 bg-zinc-100 rounded flex gap-4 whitespace-pre">
            <div className='flex flex-col'>
              <Text variant='heading3'>Contact info</Text>
              {organisation.email ? <div>{organisation.email}</div> : ''}
              {organisation.phone ? <div>{organisation.phone}</div> : ''}
              {organisation.web ? <div>{organisation.web}</div> : ''}
            </div>
            <div>
              <Text variant='heading3'>Address</Text>
              <div>{setAddress(organisation).replaceAll(', ', "\r\n")}</div>
              <div>{organisation.country}</div>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <TopicsTable title={'Topics created by ' + organisation.name} headers={topic_headers} rows={organisation.topics} />
      </div>
      <div className="flex gap-8">
        <div className='flex-1'>
          <UsersTable title={"Users"} headers={user_headers} rows={organisation.users} />
        </div>
        <div className='flex-1'>
          <CommunitiesTable title={"Communities " + organisation.name + ' is active in' } headers={community_hears} rows={organisation.communities} />
        </div>
      </div>
    </Layout>
  )
}