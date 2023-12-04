import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import { convertDateString } from "@/scripts/utils";
import ManageCommunity from '@/components/Forms/ManageCommunity';

export const metadata: Metadata = {
  title: 'Manage community',
}

export default function Community() {
  const community = {
    eid: "",
    name: '',
    description: "",
    settings: {
      joining_requires_approval: false,
      allow_invites: false,
      topics_require_approval: false,
      public: false,
    },
  };

  return (
    <Layout page_name={'Communities / Create new'} current_page='communities'>
      <div>
        <Text variant="heading1">Create a new community</Text>
      </div>
      
      <ManageCommunity 
        eid={community.eid}
        submit_url='/communities'
        feedback={{pos: " community was created", neg: 'Could not create the community'}}
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