import { Metadata } from 'next'

import Layout from "@/components/Layout/Layout";
import Text from "@/components/Text/Text";
import ManageUser from '@/components/Forms/ManageUser';

export const metadata: Metadata = {
  title: 'Create a new user',
}

export default function NewTopic() {
  const user = {
    eid: 'jdatsxezfh',
    name: 'David Rodriguez',
    email: 'david.rodriguez@email.com',
    description: 'A little bit about David',
    avatar: '/images/profile/David.png',
    organisations: [
      {eid: 'knrbpkdwne', name: 'EcoLogiX Solutions', url: '/organisations/knrbpkdwne', active: 'Active'},
      {eid: 'naxrqaawqy', name: 'DigitalVista Labs', url: '/organisations/naxrqaawqy', active: 'Not Active'},
    ]
  };

  return (
    <Layout page_name={'Users / Create new'} current_page='users' return_option={{label: "<- Back to users", url: '/users'}}>
      <div>
        <Text variant="heading1">Create a new user</Text>
      </div>
      
      <ManageUser
        eid={user.eid}
        submit_url='/topics'
        feedback={{pos: " topic was created", neg: 'Could not create the topic'}}
        name={user.name}
        email={user.email}
        description={user.description}
        organisations={user.organisations}
      />

    </Layout>
  )
}