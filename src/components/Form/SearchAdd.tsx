import React from "react";
import Button from "@/components/Form/Button";

type InputProps = {
    label: string,
    placeholder: string,
    searchTerm: string,
    onSearchTermChange: (term: string) => void,
    onSearch: () => void
}
export default function SearchAdd({label, placeholder, searchTerm, onSearchTermChange, onSearch}: InputProps){
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchTermChange(event.target.value);
    };
    return (
        <div className="w-full mb-5">
            <div className='block mb-2 text-indigo-800 font-medium'>{label}</div>
            <div className='flex items-center gap-2'>
                <div>
                    <input
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                        placeholder={placeholder}
                        type='text'
                        className='w-full cursor-normal text-zinc-800 placeholder:text-zinc-400 bg-white border-zinc-300 focus:border-indigo-400 py-3 px-6 outline-none rounded-md border-2 focus:shadow-md'
                    />
                </div>
                <Button onClick={onSearch}>Search</Button>
            </div>
        </div>
    )
}