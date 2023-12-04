import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import Link from 'next/link';
import Text from "@/components/Text/Text";
import Section from '@/components/Layout/Section';
import TopicsTable from "@/components/Tables/TopicsTable";
import OrgasTable from "@/components/Tables/OrgasTable";
import UsersTable from "@/components/Tables/UsersTable";
import Tabs from "@/components/Elements/Tabs/Tabs";
import Setting from '@/components/Elements/Setting';
import { convertDateString } from "@/scripts/utils";

export const metadata: Metadata = {
  title: 'Manage community',
}

export default function Community({ params }: { params: { id: string }}) {
  const community = {
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
      {title: 'Green Sourcing for a Bright Tomorrow', organisation: "EcoLogiX Solutions", community: "CollabNet", views: 9, collaborations: 6, status: 'Live', created_on: convertDateString('2023-11-12 09:13:56'), url: '/topics/asdasdsaa'},
      {title: 'Navigating the Digital Frontier: Proven Strategies for Success', organisation: "DigitalVista Labs", community: "BusinessLink Pro", views: 14, collaborations: 2, status: 'Live', created_on: convertDateString('2023-11-10 13:52:32'), url: '/topics/ghkjghjghj'},
      {title: 'Cultivating a Healthy Workplace: Strategies for Boosting Employee Wellbeing', organisation: "WellnessWorks Pro", community: "IndustryInsights", views: 21, collaborations: 12, status: 'Live', created_on: convertDateString('2023-11-10 11:02:26'), url: '/topics/rtyrtyrty'},
      {title: 'Global Growth Unleashed: Expanding Your E-commerce Empire', organisation: "MarketMasters International", community: "CollabNet", views: 3, collaborations: 0, status: 'Live', created_on: convertDateString('2023-11-09 16:05:21'), url: '/topics/rtyrtasdyarty'},
      {title: 'AI-Powered Customer Care: Transforming Customer Experiences', organisation: "IntelliServe Innovations", community: "BusinessLink Pro", views: 50, collaborations: 22, status: 'Live', created_on: convertDateString('2023-11-09 13:32:45'), url: '/topics/rtasyrtasdyrty'},
    ],
    organisations: [
      {name: 'EcoLogiX Solutions', city: 'New York', active: 'Active', created_on: '2023-11-08 16:35:12', url: '/organisations/knrbpkdwne'},
      {name: 'DigitalVista Labs', city: 'Denver', active: 'Active', created_on: '2023-11-08 16:30:29', url: '/organisations/naxrqaawqy'},
      {name: 'WellnessWorks Pro', city: 'San Fransisco', active: 'Active', created_on: '2023-11-08 16:28:55', url: '/organisations/kegrpbiwwf'},
      {name: 'MarketMasters International', city: 'Seattle', active: 'Active', created_on: '2023-11-08 16:24:02', url: '/organisations/lgfjvnvxdh'},
      {name: 'IntelliServe Innovations', city: 'Los Angeles', active: 'Active', created_on: '2023-11-08 16:20:38', url: '/organisations/aeljedumhf'},
    ],
    users: [
      {name: 'Sarah Johnson', email: 's.johnson@email.com', topics: 0, collaborations: 0, active: 'Not active', joined_on: '2023-11-08 16:45:00', url: '/organisations/jzthhamhka'},
      {name: 'David Rodriguez', email: 'david.rodriguez@email.com', topics: 3, collaborations: 1, active: 'Active', joined_on: '2023-11-08 16:45:00', url: '/organisations/jdatsxezfh'},
      {name: 'Emily Patel', email: 'emily.p@email.com', topics: 8, collaborations: 5, active: 'Active', joined_on: '2023-11-08 16:45:00', url: '/organisations/lnpckskjpo'},
      {name: 'Michael Carter', email: 'm.carter@email.com', topics: 7, collaborations: 0, active: 'Active', joined_on: '2023-11-08 16:45:00', url: '/organisations/jnslmrgahq'},
      {name: 'Lisa Anderson', email: 'lisa.anderson@email.com', topics: 0, collaborations: 0, active: 'Not active', joined_on: '2023-11-08 16:45:00', url: '/organisations/qgnslmivlq'},
      {name: 'Daniel Wong', email: 'daniel.w@email.com', topics: 6, collaborations: 2, active: 'Active', joined_on: '2023-11-08 16:45:00', url: '/organisations/knrjiyu wne'},
    ],
    // collabs: [
    //   {title: 'Green Sourcing for a Bright Tomorrow', user: "David Rodriguez", created_on: convertDateString('2023-11-15 09:13:56'), url: '/topics/asdasdsaa'},
    //   {title: 'Navigating the Digital Frontier: Proven Strategies for Success', user: "David Rodriguez", created_on: convertDateString('2023-11-15 13:52:32'), url: '/topics/ghkjghjghj'},
    //   {title: 'Cultivating a Healthy Workplace: Strategies for Boosting Employee Wellbeing', user: "Emily Patel", created_on: convertDateString('2023-11-14 11:02:26'), url: '/topics/rtyrtyrty'},
    //   {title: 'Green Sourcing for a Bright Tomorrow', user: "Daniel Wong", created_on: convertDateString('2023-11-14 09:13:56'), url: '/topics/asdasdsaa'},
    //   {title: 'AI-Powered Customer Care: Transforming Customer Experiences', user: "Emily Patel", created_on: convertDateString('2023-11-13 13:32:45'), url: '/topics/rtasyrtasdyrty'},
    // ]
  };
  const topic_headers = ['title', 'organisation', 'views', 'status','created_on', 'url'];
  const orga_headers = ['name', 'city', 'active', 'created_on', 'url'];
  const user_headers = ['name', 'email', 'topics', 'active', 'joined_on', 'url'];
  // const colab_hears = ['title', 'user', 'created_on', 'url'];

  const tabLabels = ['Topics', 'Organisations', 'Users'];
  const tabPages = [
    <TopicsTable key={0} title={'Topics'} headers={topic_headers} rows={community.topics} loading_message="Loading topics" />,
    <OrgasTable key={1} title="Organisations" headers={orga_headers} rows={community.organisations} loading_message="Loading organisations" />,
    <UsersTable key={2} title="Users" headers={user_headers} rows={community.users} loading_message='Loading users' />,
    // <CollabsTable key={3} title='Collaborations' headers={colab_hears} rows={community.collabs} loading_message='Loading collaborations' />
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
          <Setting label="Joining this community requires approval" active={community.settings.joining_requires_approval} />
          <Setting label="Publish in a topic in this community requires approval" active={community.settings.topics_require_approval} />
          <Setting label="This community is public" active={community.settings.public} />
        </div>
      </Section>
      <Section>
        <Text variant='heading2'>Data</Text>
        <Tabs tabLabels={tabLabels} tabPages={tabPages} />
      </Section>
    </Layout>
  )
}