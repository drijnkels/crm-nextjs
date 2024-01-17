import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import ManageTopic from '@/components/Forms/ManageTopic';

export const metadata: Metadata = {
  title: 'Manage community',
}

export default function Community() {
  const topic = {
    eid: "",
    title: '',
    content: "",
    tags: [],
    status: "",
    community: "",
    organisation: "",
    user: "",
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