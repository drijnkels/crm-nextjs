export default function TableHeaderItem ({ column, size = 'flex-1' }: {column: string, size?: string}){
  return (
    <div className={size + ' p-2'}>{column}</div>
  )
}