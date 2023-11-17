import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

import { CheckIcon } from "@heroicons/react/24/solid";
import Text from '../Text/Text';

type InputProps<TFieldValues extends FieldValues> = {
  label?: string;
  id: string;
  name: string;
  value?: boolean,
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export default function Checkbox<TFieldValues extends FieldValues>({label, id, name, value = false, required = false, register, placeholder, error, disabled = false}: InputProps<TFieldValues>) {
  return (
    <div className="relative w-full">
      {
        (label) ? (
          <div className='block mb-2 text-indigo-800 font-medium'>
            {label}
          </div>
        ) : ('')
      }
      <label htmlFor={id} className="flex items-center gap-3 rounded-md hover:bg-zinc-100 cursor-pointer w-fit p-1">
        <input type="checkbox" id={id} {...register(name as Path<TFieldValues>, { required })} defaultChecked={value ? true : false} className="peer appearance-none w-6 h-6 border border-zinc-300 shadow-inner rounded-md bg-white checked:bg-indigo-400 checked:border-indigo-50 cursor-pointer" />
        <Text subdued>{placeholder}</Text>
        <CheckIcon className='w-5 h-5 absolute left-1.5 hidden peer-checked:block text-white' />
      </label>
      {error && <p>{error}</p>}
    </div>
  )
}