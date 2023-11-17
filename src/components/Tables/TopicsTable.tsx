import Table from "@/components/Elements/Table/Table";

type TopicsTableProps = {
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
  [key in 'title' | 'organisation' | 'community' | 'views' | 'collaborations' | 'status' | 'created_on' | 'url' ] : Header
}

export default function TopicsTable({ title, headers, rows, loading_message = 'Data is loading'}: TopicsTableProps){
  const standard_headers: StandardHeaders = {
    title: {label: 'Title', field: 'title', size: 'flex-1'},
    organisation: {label: 'Organisation', field: 'organisation', size: 'flex-1'}, 
    community: {label: 'Community', field: 'community', size: 'flex-1'},
    views: {label: 'Views', field: 'views', size: 'w-[100px]'},
    collaborations: {label: 'Collaborations', field: 'collaborations', size: 'flex-1'},
    status: {label: 'Status', field: 'status', size: 'w-[100px]'},
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