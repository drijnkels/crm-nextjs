import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next';
import Image from "next/image";
import { convertDateString } from "@/scripts/utils";

import Section from "@/components/Layout/Section";
import Text from "@/components/Text/Text";
import TopicsTable from "@/components/Tables/TopicsTable";
import {TopicHeaderName} from "@/types/TopicTypes";
import {CommunityHeaderName} from "@/types/CommunityTypes";
import OrgasTable from "@/components/Tables/OrgasTable";
import {OrgaHeaderName} from "@/types/OrganisationTypes";

export const metadata: Metadata = {
  title: 'Users',
}

export default function Users() {
  const user = {
    eid: 'jdatsxezfh',
    name: 'David Rodriguez',
    email: 'david.rodriguez@email.com',
    avatar: '/images/profile/David.png',
    topics: [
      {title: 'Green Sourcing for a Bright Tomorrow', organisation: "EcoLogiX Solutions", community_name: "CollabNet", views: 9, collaborations: 6, status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
    ],
    organisations: [
      {eid: 'knrbpkdwne', name: 'EcoLogiX Solutions', url: '/organisations/knrbpkdwne', active: 'Active'},
      {eid: 'naxrqaawqy', name: 'DigitalVista Labs', url: '/organisations/naxrqaawqy', active: 'Not Active'},
    ]
  };

  const topic_headers: Array<TopicHeaderName> = ['title', 'community_name', 'created_on', 'url'];
  const organisation_headers: Array<OrgaHeaderName> = ['name', 'active', 'url'];

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

      <OrgasTable title={"Organisations " + user.name + ' is connected to' } headers={organisation_headers} rows={user.organisations} />
    </Layout>
  )
}