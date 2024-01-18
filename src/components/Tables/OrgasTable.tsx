import Table from "@/components/Elements/Table/Table";
import { OrgaTableHeaders } from "@/types/OrganisationTypes";
import {TableProps} from "@/types/GeneralTypes";

export default function OrgasTable({ title, headers, rows, loading_message = 'Data is loading'}: TableProps){
  const standard_headers: OrgaTableHeaders = {
    name: {label: 'Name', field: 'name', size: 'flex-1'},
    city: {label: 'City', field: 'city', size: 'flex-1'},
    num_users: {label: 'Users', field: 'num_users', size: 'w-[100px]'},
    num_topics: {label: 'Topics', field: 'num_topics', size: 'w-[100px]'},
    active: {label: 'Active', field: 'active', size: 'w-[100px]'},
    created_on: {label: 'Created', field: 'created_on', size: 'w-[120px]'},
    url: {label: 'View', field: 'url', size: 'w-[100px]'},
  };
  const table_headers = [];
  for(let header of headers){
    table_headers.push(standard_headers[header as keyof OrgaTableHeaders]);
  }
  return (
    <Table title={title} headers={table_headers} rows={rows} loading_message={loading_message} />
  )
}