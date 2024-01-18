import Table from "@/components/Elements/Table/Table";
import {CommunityTableHeaders} from "@/types/CommunityTypes";
import {TableProps} from "@/types/GeneralTypes";

export default function CommunitiesTable({ title, headers, rows, loading_message = 'Data is loading'}: TableProps){
  const standard_headers: CommunityTableHeaders = {
    name: {label: 'Name', field: 'name', size: 'flex-1'},
    active: {label: 'Active', field: 'active', size: 'w-[100px]'},
    num_topics: {label: 'Topics', field: 'num_topics', size: 'w-[100px]'},
    num_organisations: {label: 'Organisations', field: 'num_organisations', size: 'w-[120px]'},
    num_users: {label: 'Users', field: 'num_users', size: 'w-[100px]'},
    joined_on: {label: 'Joined', field: 'created_on', size: 'w-[120px]'},
    created_on: {label: 'Created', field: 'created_on', size: 'w-[120px]'},
    url: {label: 'View', field: 'url', size: 'w-[100px]'},
  };
  const table_headers = [];
  for(let header of headers){
    table_headers.push(standard_headers[header as keyof CommunityTableHeaders]);
  }
  return (
    <Table title={title} headers={table_headers} rows={rows} loading_message={loading_message} />
  )
}