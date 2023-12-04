import { Metadata } from 'next'
import { convertDateString } from "@/scripts/utils";
import Layout from "@/components/Layout/Layout";
import Section from '@/components/Layout/Section';
import Link from 'next/link';
import Text from "@/components/Text/Text";
import ViewsTable from "@/components/Tables/ViewsTable";
import Tag from '@/components/Elements/Tag';

export const metadata: Metadata = {
  title: 'Topics',
}

export default function Topics() {
  const topic = {
    title: 'Green Sourcing for a Bright Tomorrow', 
    content: '"Green Sourcing for a Bright Tomorrow" is a journey towards sustainable business practices. \r\n\r\nIn an era defined by environmental consciousness, businesses are increasingly turning to eco-friendly sourcing methods. Companies like EcoLogiX Solutions are leading the way by prioritizing eco-conscious suppliers, reducing carbon footprints, and implementing circular economy principles. Their commitment to green sourcing not only minimizes environmental impact but also resonates with socially conscious consumers. \r\n\r\nThis shift towards sustainable sourcing doesn\'t just benefit the planet; it also enhances brand reputation, fosters innovation, and ultimately secures a brighter, more sustainable future for businesses and the global community alike. Embrace green sourcing today for a better tomorrow.',
    user: {eid: 'jdatsxezfh', name: 'David Rodriguez'},
    organisation: {eid: 'knrbpkdwne', name: "EcoLogiX Solutions"},
    community: {eid: 'asdasdsaa', name: "CollabNet"},
    views: [
      {user: 'David Rodriguez', organisation: 'DigitalVista Labs', created_on: convertDateString('2023-11-15 09:12:45', true), url: '/users/jdatsxezfh'}
    ], 
    tags: ['Green', 'Sustainablty', 'Carbon Footprint'],
    collaborations: 6,
    status: 'Live', 
    created_on: convertDateString('2023-11-12 09:13:56'), 
  };

  const views_headers = ['user', 'organisation', 'created_on', 'url'];
  return (
    <Layout page_name="Topics" current_page='topics' return_option={{label: "<- Back to topics", url: '/topics'}}>
      <div className='flex flex-col gap-1'>
        <Text variant="heading1">{topic.title}</Text>
        <div>Topic created in <Link href={"/communities/" + topic.community.eid} className='font-semibold text-zinc-600 hover:text-indigo-500 duration-200 transition-colors'>{topic.community.name}</Link></div>
        <div>A topic by <Link href={"/users/" + topic.user.eid} className='font-semibold text-zinc-600 hover:text-indigo-500 duration-200 transition-colors'>{topic.user.name}</Link> - <Link href={"/organisations/" + topic.organisation.eid} className='font-semibold text-zinc-600 hover:text-indigo-500 duration-200 transition-colors'>{topic.organisation.name}</Link></div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <Section>
            <Text variant='heading3'>Tags</Text>
            <div className='flex gap-2'>
            {
              topic.tags.map(( label, index ) => <Tag key={index} label={label} />)
            }
            </div>
          </Section>
          <Section>
            <Text variant='heading3'>Content</Text>
            <div className="max-w-[450px] py-4 px-6 bg-zinc-100 rounded whitespace-pre-line">
              {topic.content}
            </div>
          </Section>
        </div>
        <div className="flex-1">
          <ViewsTable title="Views" headers={views_headers} rows={topic.views} />
        </div>
      </div>
    </Layout>
  )
}