import Table from "@/components/Elements/Table/Table";
import { UserTableHeaders } from "@/types/UserTypes";
import {TableProps} from "@/types/GeneralTypes";

export default function UsersTable({ title, headers, rows, loading_message = 'Data is loading'}: TableProps){
  const standard_headers: UserTableHeaders = {
    name: {label: 'Name', field: 'name', size: 'flex-1'},
    email: {label: 'Email', field: 'email', size: 'flex-1'},
    num_topics: {label: 'Topics', field: 'num_topics', size: 'w-[100px]'},
    active: {label: 'Active', field: 'active', size: 'w-[100px]'},
    last_login: {label: 'Last Login', field: 'last_login', size: 'w-[120px]'},
    joined_on: {label: 'Joined', field: 'joined_on', size: 'w-[120px]'},
    created_on: {label: 'Created', field: 'created_on', size: 'w-[120px]'},
    url: {label: 'View', field: 'url', size: 'w-[100px]'},
  };
  const table_headers = [];
  for(let header of headers){
    table_headers.push(standard_headers[header as keyof UserTableHeaders]);
  }
  return (
    <Table title={title} headers={table_headers} rows={rows} loading_message={loading_message} />
  )
}