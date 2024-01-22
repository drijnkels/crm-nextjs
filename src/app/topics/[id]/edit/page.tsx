import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import ManageTopic from '@/components/Forms/ManageTopic';
import {convertDateString} from "@/scripts/utils";

export const metadata: Metadata = {
  title: 'Create a new community',
}

export default function EditTopic({ params }: { params: { id: string }}) {
  const topic = {
    eid: '55c91db89255ccd27ed77c78f86c98b1',
    title: 'Green Sourcing for a Bright Tomorrow',
    content: '"Green Sourcing for a Bright Tomorrow" is a journey towards sustainable business practices. \r\n\r\nIn an era defined by environmental consciousness, businesses are increasingly turning to eco-friendly sourcing methods. Companies like EcoLogiX Solutions are leading the way by prioritizing eco-conscious suppliers, reducing carbon footprints, and implementing circular economy principles. Their commitment to green sourcing not only minimizes environmental impact but also resonates with socially conscious consumers. \r\n\r\nThis shift towards sustainable sourcing doesn\'t just benefit the planet; it also enhances brand reputation, fosters innovation, and ultimately secures a brighter, more sustainable future for businesses and the global community alike. Embrace green sourcing today for a better tomorrow.',
    user: {eid: 'jdatsxezfh', name: 'David Rodriguez', email: '', active: '', url: ''},
    organisation: {eid: 'knrbpkdwne', name: "EcoLogiX Solutions"},
    community: {eid: 'asdasdsaa', name: "CollabNet"},
    views: [
      {user: 'David Rodriguez', organisation: 'DigitalVista Labs', created_on: convertDateString('2023-11-15 09:12:45', true), url: '/users/jdatsxezfh'}
    ],
    tags: ['Green', 'Sustainablty', 'Carbon Footprint'],
    status: 'Live',
    created_on: convertDateString('2023-11-12 09:13:56'),
  };

  return (
    <Layout page_name={'Topics / Create new'} current_page='topics' return_option={{label: "<- Back to topics", url: '/topics'}}>
      <div>
        <Text variant="heading1">Create a new Topic</Text>
      </div>
      
      <ManageTopic 
        eid={topic.eid}
        submit_url='/topics'
        feedback={{pos: " topic was created", neg: 'Could not create the topic'}}
        title={topic.title} 
        content={topic.content} 
        tags={topic.tags}
        status={topic.status}
        community={topic.community}
        organisation={topic.organisation}
        user={topic.user}
      />

    </Layout>
  )
}