export type TableProps = {
    title: string;
    headers: Array<string>;
    rows: Array<{[key: string] : string | number}>;
    loading_message?: string
}

// Define header type
export type Header = {
    label: string;
    field: string;
    size: string;
}