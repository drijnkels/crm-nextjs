import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type InputProps<TFieldValues extends FieldValues> = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type?: 'text' | 'password' | 'email';
  register: UseFormRegister<TFieldValues>;
  required?: string;
  disabled?: boolean;
  error?: string;
}

export default function Input<TFieldValues extends FieldValues>({label, id, name, required, register, placeholder, error, disabled = false, type = 'text'}: InputProps<TFieldValues>) {
  const disabledClasses = disabled ? 
    'bg-zinc-100 text-zinc-500 border-zinc-300 cursor-not-allowed pointer-events-none' :
    'cursor-normal text-zinc-800 placeholder:text-zinc-400 bg-white border-zinc-300 focus:border-indigo-400';
  return (
    <div className="w-full mb-5">
      <label htmlFor={id} className="block mb-2 text-indigo-800 font-medium">{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register(name as Path<TFieldValues>, { required })} className={disabledClasses + " w-full py-3 px-6 outline-none rounded-md border-2 focus:shadow-md"} />
      {error && <p>{error}</p>}
    </div>
  )
}