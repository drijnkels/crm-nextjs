import Link from 'next/link';

type RowProps = {
  headers: Array<{label: string, field: string, size: string }>;
  row: {[key: string] : string | number};
}

export default function TableRow({ headers, row }: RowProps){
  return(
    <div className="flex divide-x divide-zinc-50 items-center">
      {
        headers.map( (header, index) => {
          let rowElement = <div key={index} className={header.size + ' p-2'}>{row[header.field] || '-'}</div>;
          if (header.field == 'url' && typeof row['url'] === 'string') {
            rowElement = <Link href={row['url']} key={index} className={header.size + ' p-2 text-indigo-400 font-medium hover:bg-zinc-50'}>View</Link>;
          }
          return rowElement;
        })
      }
    </div>
  )
}