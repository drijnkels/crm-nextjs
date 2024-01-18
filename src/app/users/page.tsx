import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next';
import { convertDateString } from "@/scripts/utils";
import {UserForTable, UserHeaderName} from "@/types/UserTypes";

import UsersTable from "@/components/Tables/UsersTable";

export const metadata: Metadata = {
  title: 'Users',
}

export default function Users() {
  const users: UserForTable[] = [
    {eid: 'jdatsxezfh', name: 'David Rodriguez', email: 'david.rodriguez@email.com', num_topics: 3, active: 'Active', last_login: convertDateString('2023-11-16 17:21:00', true), joined_on: '2023-11-08 16:45:00', url: '/users/jdatsxezfh'},
    {eid: 'lnpckskjpo', name: 'Emily Patel', email: 'emily.p@email.com', num_topics: 8, active: 'Active', last_login: convertDateString('2023-11-14 12:10:42', true), joined_on: '2023-11-08 16:45:00', url: '/users/lnpckskjpo'},
    {eid: 'jnslmrgahq', name: 'Michael Carter', email: 'm.carter@email.com', num_topics: 7, active: 'Active', last_login: convertDateString('2023-11-14 09:12:10', true), joined_on: '2023-11-08 16:45:00', url: '/users/jnslmrgahq'},
    {eid: 'nrjiyu wne', name: 'Daniel Wong', email: 'daniel.w@email.com', num_topics: 6, active: 'Active', last_login: convertDateString('2023-11-14 09:05:00', true), joined_on: '2023-11-08 16:45:00', url: '/users/knrjiyu wne'},
    {eid: 'qgnslmivlq', name: 'Lisa Anderson', email: 'lisa.anderson@email.com', num_topics: 0, active: 'Not active', last_login: '', joined_on: '2023-11-08 16:45:00', url: '/users/qgnslmivlq'},
    {eid: 'jzthhamhka', name: 'Sarah Johnson', email: 's.johnson@email.com', num_topics: 0, active: 'Not active', last_login: "", joined_on: '2023-11-08 16:45:00', url: '/users/jzthhamhka'},
  ];
  const headers: Array<UserHeaderName> = ['name', 'email', 'num_topics', 'last_login', 'url'];
  return (
    <Layout page_name="Users" current_page="users" action={{label: 'Create', url: `/users/new`}}>
      <UsersTable title="Users" headers={headers} rows={users} />
    </Layout>
  )
}