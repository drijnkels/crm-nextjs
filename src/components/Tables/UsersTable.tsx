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
  [key in 'name' | 'email' | 'topics' | 'collaborations' | 'active' | 'last_login' | 'joined_on' | 'created_on' | 'url' ] : Header
}

export default function UsersTable({ title, headers, rows, loading_message = 'Data is loading'}: OrgaTableProps){
  const standard_headers: StandardHeaders = {
    name: {label: 'Name', field: 'name', size: 'flex-1'},
    email: {label: 'Email', field: 'email', size: 'flex-1'}, 
    topics: {label: 'Topics', field: 'topics', size: 'w-[100px]'},
    collaborations: {label: 'Collaborations', field: 'collaborations', size: 'w-[120px]'},
    active: {label: 'Active', field: 'active', size: 'w-[100px]'},
    last_login: {label: 'Last Login', field: 'last_login', size: 'w-[120px]'},
    joined_on: {label: 'Joined', field: 'joined_on', size: 'w-[120px]'},
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