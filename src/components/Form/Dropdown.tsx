import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type InputProps<TFieldValues extends FieldValues> = {
  label: string;
  id: string;
  name: string;
  options: Array<{label: string, value: string}>,
  value?: string,
  register: UseFormRegister<TFieldValues>;
  required?: string;
  disabled?: boolean;
  error?: string;
}

export default function Dropdown<TFieldValues extends FieldValues>({label, id, name, options, value = '', required, register, error, disabled = false}: InputProps<TFieldValues>) {
  const disabledClasses = disabled ?
    'bg-zinc-100 text-zinc-500 border-zinc-300 cursor-not-allowed pointer-events-none' :
    'cursor-normal text-zinc-800 placeholder:text-zinc-400 bg-white border-zinc-300 focus:border-indigo-400';
  return (
    <div className="w-full mb-5">
      <label htmlFor={id} className="block mb-2 text-indigo-800 font-medium">{label}</label>
      <select id={id} defaultValue={value} {...register(name as Path<TFieldValues>, { required })} className={disabledClasses + " w-full py-3 px-6 outline-none rounded-md border-2 focus:shadow-md"}>
        <option value='' disabled>Select...</option>
        {options.map((o, index) => <option value={o.value} key={index}>{o.label}</option>)}
      </select>
      {error && <p>{error}</p>}
    </div>
  )
}