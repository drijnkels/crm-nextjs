import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import { convertDateString } from "@/scripts/utils";
import ManageCommunity from '@/components/Forms/ManageCommunity';

export const metadata: Metadata = {
  title: 'Manage community',
}

export default function EditCommunity({ params }: { params: { id: string }}) {
  const community = {
    eid: params.id,
    name: 'CollabNet',
    description: "Empowering Business Excellence Through Collaboration",
    url: '/communities/asdasdsaa',
    created_on: '2023-11-01 10:11:12',
    last_edit: '2023-11-14 17:45:23',
    settings: {
      joining_requires_approval: true,
      allow_invites: true,
      topics_require_approval: true,
      public: false,
    },
  };

  return (
    <Layout page_name={'Communities / ' + community.name} current_page='communities' return_option={{label: "<- Back to community", url: '/communities/' + community.name}}>
      <div>
        <Text variant="heading1">Edit community: {community.name}</Text>
        <span className='italic'>Last edited on {convertDateString(community.last_edit, true)}</span>
      </div>
      
      <ManageCommunity 
        eid={community.eid}
        submit_url={`/communities/${community.eid}`}
        feedback={{pos: " community was updated", neg: 'Could not update the community'}}
        name={community.name} 
        description={community.description} 
        joining_requires_approval={community.settings.joining_requires_approval}
        allow_invites={community.settings.allow_invites}
        topics_require_approval={community.settings.topics_require_approval}
        public_community={community.settings.public}
      />

    </Layout>
  )
}