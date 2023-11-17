import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next';
import { convertDateString } from "@/scripts/utils";

import UsersTable from "@/components/Tables/UsersTable";

export const metadata: Metadata = {
  title: 'Users',
}

export default function Users() {
  const users = [
    {name: 'David Rodriguez', email: 'david.rodriguez@email.com', topics: 3, collaborations: 1, active: 'Active', last_login: convertDateString('2023-11-16 17:21:00', true), joined_on: '2023-11-08 16:45:00', url: '/organisations/jdatsxezfh'},
    {name: 'Emily Patel', email: 'emily.p@email.com', topics: 8, collaborations: 5, active: 'Active', last_login: convertDateString('2023-11-14 12:10:42', true), joined_on: '2023-11-08 16:45:00', url: '/organisations/lnpckskjpo'},
    {name: 'Michael Carter', email: 'm.carter@email.com', topics: 7, collaborations: 0, active: 'Active', last_login: convertDateString('2023-11-14 09:12:10', true), joined_on: '2023-11-08 16:45:00', url: '/organisations/jnslmrgahq'},
    {name: 'Daniel Wong', email: 'daniel.w@email.com', topics: 6, collaborations: 2, active: 'Active', last_login: convertDateString('2023-11-14 09:05:00', true), joined_on: '2023-11-08 16:45:00', url: '/organisations/knrjiyu wne'},
    {name: 'Lisa Anderson', email: 'lisa.anderson@email.com', topics: 0, collaborations: 0, active: 'Not active', last_login: '', joined_on: '2023-11-08 16:45:00', url: '/organisations/qgnslmivlq'},
    {name: 'Sarah Johnson', email: 's.johnson@email.com', topics: 0, collaborations: 0, active: 'Not active', last_login: "", joined_on: '2023-11-08 16:45:00', url: '/organisations/jzthhamhka'},
  ];
  const headers = ['name', 'email', 'topics', 'last_login', 'url'];
  return (
    <Layout page_name="Users" current_page="users">
      <UsersTable title="Users" headers={headers} rows={users} />
    </Layout>
  )
}