import { Metadata } from 'next'
import Layout from "@/components/Layout/Layout";
import OrgasTable from '@/components/Tables/OrgasTable';
import {OrgaHeaderName, OrganisationForTable} from "@/types/OrganisationTypes";

export const metadata: Metadata = {
  title: 'Organisations',
}

export default function Organisations() {
  const organisations: OrganisationForTable[] = [
    {eid: 'knrbpkdwne', name: 'EcoLogiX Solutions', city: 'New York', num_users: 5, num_topics: 2, active: 'Active', created_on: '2023-11-08 16:35:12', url: '/organisations/knrbpkdwne'},
    {eid: 'naxrqaawqy', name: 'DigitalVista Labs', city: 'Denver', num_users: 5, num_topics: 2, active: 'Active', created_on: '2023-11-08 16:30:29', url: '/organisations/naxrqaawqy'},
    {eid: 'kegrpbiwwf', name: 'WellnessWorks Pro', city: 'San Fransisco', num_users: 5, num_topics: 2, active: 'Active', created_on: '2023-11-08 16:28:55', url: '/organisations/kegrpbiwwf'},
    {eid: 'lgfjvnvxdh', name: 'MarketMasters International', city: 'Seattle', num_users: 5, num_topics: 2, active: 'Active', created_on: '2023-11-08 16:24:02', url: '/organisations/lgfjvnvxdh'},
    {eid: 'aeljedumhf', name: 'IntelliServe Innovations', city: 'Los Angeles', num_users: 5, num_topics: 2, active: 'Active', created_on: '2023-11-08 16:20:38', url: '/organisations/aeljedumhf'},
  ];
  const headers: Array<OrgaHeaderName> = ['name', 'city', 'num_users', 'num_topics', 'url'];
  return (
    <Layout page_name="Organisations" current_page="organisations" action={{label: 'Create', url: `/organisations/new`}} >
      <OrgasTable title='Organisations' headers={headers} rows={organisations} />
    </Layout>
  )
}