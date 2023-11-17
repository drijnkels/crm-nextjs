import Table from "@/components/Elements/Table/Table";

type CommTableProps = {
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
  [key in 'name' | 'active' | 'topics' | 'organisations' | 'users' | 'collaborations' | 'joined_on' | 'created_on' | 'url' ] : Header
}

export default function CommunitiesTable({ title, headers, rows, loading_message = 'Data is loading'}: CommTableProps){
  const standard_headers: StandardHeaders = {
    name: {label: 'Name', field: 'name', size: 'flex-1'},
    active: {label: 'Active', field: 'active', size: 'w-[100px]'},
    topics: {label: 'Topics', field: 'topics', size: 'w-[100px]'},
    organisations: {label: 'Organisations', field: 'organisations', size: 'w-[120px]'},
    users: {label: 'Users', field: 'users', size: 'w-[100px]'},
    collaborations: {label: 'Collaborations', field: 'collaborations', size: 'w-[120px]'},
    joined_on: {label: 'Joined', field: 'created_on', size: 'w-[120px]'},
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