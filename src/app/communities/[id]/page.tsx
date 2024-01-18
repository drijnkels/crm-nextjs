import { Metadata } from 'next'

import { Community } from "@/types/CommunityTypes";
import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import Section from '@/components/Layout/Section';
import TopicsTable from "@/components/Tables/TopicsTable";
import OrgasTable from "@/components/Tables/OrgasTable";
import UsersTable from "@/components/Tables/UsersTable";
import Tabs from "@/components/Elements/Tabs/Tabs";
import Setting from '@/components/Elements/Setting';
import { convertDateString } from "@/scripts/utils";
import {TopicHeaderName} from "@/types/TopicTypes";
import {UserHeaderName} from "@/types/UserTypes";
import {OrgaHeaderName} from "@/types/OrganisationTypes";

export const metadata: Metadata = {
  title: 'Manage community',
}

export default function Community({ params }: { params: { id: string }}) {
  const community: Community = {
    eid: params.id,
    name: 'CollabNet',
    description: "Empowering Business Excellence Through Collaboration",
    url: '/communities/asdasdsaa',
    created_on: '2023-11-01 10:11:12',
    settings: {
      joining_requires_approval: true,
      topics_require_approval: true,
      public: false,
    },
    topics: [
      {eid: 'asdasdsaa', title: 'Green Sourcing for a Bright Tomorrow', organisation_name: "EcoLogiX Solutions", community_name: "CollabNet", num_views: 9,  status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
      {eid: 'hkjghjghj', title: 'Navigating the Digital Frontier: Proven Strategies for Success', organisation_name: "DigitalVista Labs", community_name: "BusinessLink Pro", num_views: 14,  status: 'Live', created_on: convertDateString('2023-11-10 13:52:32'), url: '/topics/ghkjghjghj'},
      {eid: 'rtyrtyrty', title: 'Cultivating a Healthy Workplace: Strategies for Boosting Employee Wellbeing', organisation_name: "WellnessWorks Pro", community_name: "IndustryInsights", num_views: 21, status: 'Live', created_on: convertDateString('2023-11-10 11:02:26'), url: '/topics/rtyrtyrty'},
      {eid: 'tasdyarty', title: 'Global Growth Unleashed: Expanding Your E-commerce Empire', organisation_name: "MarketMasters International", community_name: "CollabNet", num_views: 3, status: 'Live', created_on: convertDateString('2023-11-09 16:05:21'), url: '/topics/rtyrtasdyarty'},
      {eid: 'rtasdyrty', title: 'AI-Powered Customer Care: Transforming Customer Experiences', organisation_name: "IntelliServe Innovations", community_name: "BusinessLink Pro", num_views: 50, status: 'Live', created_on: convertDateString('2023-11-09 13:32:45'), url: '/topics/rtasyrtasdyrty'},
    ],
    organisations: [
      {eid: 'knrbpkdwne', name: 'EcoLogiX Solutions', city: 'New York', active: 'Active', created_on: '2023-11-08 16:35:12', url: '/organisations/knrbpkdwne'},
      {eid: 'naxrqaawqy', name: 'DigitalVista Labs', city: 'Denver', active: 'Active', created_on: '2023-11-08 16:30:29', url: '/organisations/naxrqaawqy'},
      {eid: 'kegrpbiwwf', name: 'WellnessWorks Pro', city: 'San Fransisco', active: 'Active', created_on: '2023-11-08 16:28:55', url: '/organisations/kegrpbiwwf'},
      {eid: 'lgfjvnvxdh', name: 'MarketMasters International', city: 'Seattle', active: 'Active', created_on: '2023-11-08 16:24:02', url: '/organisations/lgfjvnvxdh'},
      {eid: 'aeljedumhf', name: 'IntelliServe Innovations', city: 'Los Angeles', active: 'Active', created_on: '2023-11-08 16:20:38', url: '/organisations/aeljedumhf'},
    ],
    users: [
      {eid: 'jzthhamhka', name: 'Sarah Johnson', email: 's.johnson@email.com', num_topics: 0, active: 'Not active', last_login: '2024-01-17 22:228', joined_on: '2023-11-08 16:45:00', url: '/organisations/jzthhamhka'},
      {eid: 'jdatsxezfh', name: 'David Rodriguez', email: 'david.rodriguez@email.com', num_topics: 3, active: 'Active', last_login: '2024-01-17 22:228', joined_on: '2023-11-08 16:45:00', url: '/organisations/jdatsxezfh'},
      {eid: 'lnpckskjpo', name: 'Emily Patel', email: 'emily.p@email.com', num_topics: 8, active: 'Active', last_login: '2024-01-17 22:228', joined_on: '2023-11-08 16:45:00', url: '/organisations/lnpckskjpo'},
      {eid: 'jnslmrgahq', name: 'Michael Carter', email: 'm.carter@email.com', num_topics: 7, active: 'Active', last_login: '2024-01-17 22:228', joined_on: '2023-11-08 16:45:00', url: '/organisations/jnslmrgahq'},
      {eid: 'qgnslmivlq', name: 'Lisa Anderson', email: 'lisa.anderson@email.com', num_topics: 0, active: 'Not active', last_login: '2024-01-17 22:228', joined_on: '2023-11-08 16:45:00', url: '/organisations/qgnslmivlq'},
      {eid: 'knrjiyuwne', name: 'Daniel Wong', email: 'daniel.w@email.com', num_topics: 6, active: 'Active', last_login: '2024-01-17 22:228', joined_on: '2023-11-08 16:45:00', url: '/organisations/knrjiyuwne'},
    ],
  };
  const topic_headers: Array<TopicHeaderName> = ['title', 'organisation_name', 'num_views', 'status','created_on', 'url'];
  const orga_headers: Array<OrgaHeaderName> = ['name', 'city', 'active', 'created_on', 'url'];
  const user_headers: Array<UserHeaderName> = ['name', 'email', 'num_topics', 'active', 'joined_on', 'url'];

  const tabLabels = ['Topics', 'Organisations', 'Users'];
  const tabPages = [
    <TopicsTable key={0} title='Topics' headers={topic_headers} rows={community.topics} loading_message="Loading topics" />,
    <OrgasTable key={1} title="Organisations" headers={orga_headers} rows={community.organisations} loading_message="Loading organisations" />,
    <UsersTable key={2} title="Users" headers={user_headers} rows={community.users} loading_message='Loading users' />,
  ];

  return (
    <Layout page_name={'Communities / ' + community.name} current_page='communities' return_option={{label: "<- Back to communities", url: '/communities'}} action={{label: 'Edit', url: `/communities/${community.eid}/edit`}}>
      <div>
        <Text variant="heading1">Manage: {community.name}</Text>
        <span className='italic'>Created on {convertDateString(community.created_on)}</span>
      </div>
      <div className="italic">
        {community.description}
      </div>
      <Section>
        <Text variant='heading2'>Settings</Text>
        <div className='py-4 px-6 bg-zinc-100 rounded flex flex-col gap-2'>
          <Setting label="Joining this community requires approval" active={community.settings?.joining_requires_approval || false} />
          <Setting label="Publish in a topic in this community requires approval" active={community.settings?.topics_require_approval || false} />
          <Setting label="This community is public" active={community.settings?.public || false} />
        </div>
      </Section>
      <Section>
        <Text variant='heading2'>Data</Text>
        <Tabs tabLabels={tabLabels} tabPages={tabPages} />
      </Section>
    </Layout>
  )
}