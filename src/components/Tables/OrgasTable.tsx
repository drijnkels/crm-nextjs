import Table from "@/components/Elements/Table/Table";

type OrgaTableProps = {
  title: string;
  headers: Array<string>;
  rows: Array<{[key: string] : string | number}>;
  loading_message?: string
}

// Define header type
type Header = {
  label: string;
  field: string;
  size: string;
}

// Define allowed headers
type StandardHeaders = {
  [key in 'name' | 'city' | 'users' | 'topics' | 'collaborations' | 'active' | 'created_on' | 'url' ] : Header
}

export default function OrgaTable({ title, headers, rows, loading_message = 'Data is loading'}: OrgaTableProps){
  const standard_headers: StandardHeaders = {
    name: {label: 'Name', field: 'name', size: 'flex-1'},
    city: {label: 'City', field: 'city', size: 'flex-1'}, 
    users: {label: 'Users', field: 'users', size: 'w-[100px]'},
    topics: {label: 'Topics', field: 'topics', size: 'w-[100px]'},
    collaborations: {label: 'Collaborations', field: 'collaborations', size: 'w-[120px]'},
    active: {label: 'Active', field: 'active', size: 'w-[100px]'},
    created_on: {label: 'Created', field: 'created_on', size: 'w-[120px]'},
    url: {label: 'View', field: 'url', size: 'w-[100px]'},
  };
  const table_headers = [];
  for(let header of headers){
    table_headers.push(standard_headers[header as keyof StandardHeaders]);
  }
  return (
    <Table title={title} headers={table_headers} rows={rows} loading_message={loading_message} />
  )
}