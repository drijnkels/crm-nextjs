import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next';
import Image from "next/image";

import Section from "@/components/Layout/Section";
import Text from "@/components/Text/Text";

export const metadata: Metadata = {
  title: 'Profile',
}

export default function Users() {
  const user = {
    name: 'You',
    email: 'your@email.com',
    avatar: '/images/profile/Daan.png',
  };

  return (
    <Layout page_name="Profile" current_page="profile">
      <div className='flex gap-8'>
        <Section>
          <div className='flex items-center gap-4'>
            <Image src={user.avatar} alt={user.name + ' avatar'} width="64" height="64" />
            <Text variant="heading1">{user.name}</Text>
          </div>
        </Section>
        <div>
          <div className="max-w-[450px] py-4 px-6 bg-zinc-100 rounded flex gap-4 whitespace-pre">
            Your admin profile
          </div>
        </div>
      </div>
    </Layout>
  )
}