import TableHeaderItem from "./TableHeaderItem";
import TableRow from "./TableRow";

type TableProps = {
  title: string;
  headers: Array<{label: string, field: string, size: string }>;
  rows: Array<{[key: string] : string | number}>;
  loading_message?: string;
}

export default function Table ({ title, headers, rows, loading_message = 'Data is loading'}: TableProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* Table title */}
      <div className="font-medium text-lg whitespace-pre-line">{title}</div>

      {/* Table */}
      <div className="border border-zinc-100 rounded-md mt-2">
        {/* Table headers */}
        <div className="flex flex-row text-left font-semibold bg-zinc-50">
          { headers.map((header, index) =>  <TableHeaderItem key={index} column={header.label} size={header.size} /> ) }
        </div>

        {/* Table rows */}
        <div className="flex flex-col divide-y divide-zinc-50">
          { rows.map((row, index) => <TableRow key={index} headers={headers} row={row} /> ) }
        </div>
      </div>
    </div>
  )
}