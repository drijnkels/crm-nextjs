import Layout from "@/components/Layout/Layout";
import Table from "@/components/Elements/Table/Table";

export default function Communities() {
  const communities = {
    title: 'Communities',
    headers: [
      {label: 'Name', field: 'name', size: 'flex-1'},
      {label: 'Topics', field: 'topics', size: 'flex-1'}, 
      {label: 'Organisations', field: 'organisations', size: 'flex-1'},
      {label: 'Users', field: 'users', size: 'flex-1'},
      {label: 'Collaborations', field: 'collaborations', size: 'flex-1'},
      {label: 'View', field: 'url', size: 'w-[100px]'},
    ],
    rows: [
      {name: 'Community 1', topics: 9, organisations: 4, users: 14, collaborations: 6, url: '/communities/asdasdsaa'},
      {name: 'Community 2', topics: 14, organisations: 2, users: 6, collaborations: 0, url: '/communities/ghkjghjghj'},
      {name: 'Community 3', topics: 21, organisations: 8, users: 56, collaborations: 12, url: '/communities/rtyrtyrty'},
    ]};
  return (
    <Layout page_name="Communities">
      <Table title={communities.title} headers={communities.headers} rows={communities.rows} loading_message="Loading communities" />
    </Layout>
  )
}