import { Metadata } from 'next'
import Layout from "@/components/Layout/Layout";
import OrgaTable from '@/components/Tables/OrgasTable';


export const metadata: Metadata = {
  title: 'Organisations',
}

export default function Organisations() {
  const organisations = [
    {name: 'EcoLogiX Solutions', city: 'New York', users: 5, topics: 2, active: 'Active', created_on: '2023-11-08 16:35:12', url: '/organisations/knrbpkdwne'},
    {name: 'DigitalVista Labs', city: 'Denver', users: 5, topics: 2, active: 'Active', created_on: '2023-11-08 16:30:29', url: '/organisations/naxrqaawqy'},
    {name: 'WellnessWorks Pro', city: 'San Fransisco', users: 5, topics: 2, active: 'Active', created_on: '2023-11-08 16:28:55', url: '/organisations/kegrpbiwwf'},
    {name: 'MarketMasters International', city: 'Seattle', users: 5, topics: 2, active: 'Active', created_on: '2023-11-08 16:24:02', url: '/organisations/lgfjvnvxdh'},
    {name: 'IntelliServe Innovations', city: 'Los Angeles', users: 5, topics: 2, active: 'Active', created_on: '2023-11-08 16:20:38', url: '/organisations/aeljedumhf'},
  ];
  const headers = ['name', 'city', 'users', 'topics', 'url'];
  return (
    <Layout page_name="Organisations" current_page="organisations">
      <OrgaTable title='Organisations' headers={headers} rows={organisations} />
    </Layout>
  )
}