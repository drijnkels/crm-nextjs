import Table from "@/components/Elements/Table/Table";
import { TopicTableHeaders } from "@/types/TopicTypes";
import {TableProps} from "@/types/GeneralTypes";


export default function TopicsTable({ title, headers, rows, loading_message = 'Data is loading'}: TableProps){
  const standard_headers: TopicTableHeaders = {
    title: {label: 'Title', field: 'title', size: 'flex-1'},
    organisation_name: {label: 'Organisation', field: 'organisation_name', size: 'flex-1'},
    community_name: {label: 'Community', field: 'community_name', size: 'flex-1'},
    num_views: {label: 'Views', field: 'num_views', size: 'w-[100px]'},
    status: {label: 'Status', field: 'status', size: 'w-[100px]'},
    created_on: {label: 'Created', field: 'created_on', size: 'w-[120px]'},
    url: {label: 'View', field: 'url', size: 'w-[100px]'},
  };
  const table_headers = [];
  for(let header of headers){
    table_headers.push(standard_headers[header as keyof TopicTableHeaders]);
  }
  return (
    <Table title={title} headers={table_headers} rows={rows} loading_message={loading_message} />
  )
}