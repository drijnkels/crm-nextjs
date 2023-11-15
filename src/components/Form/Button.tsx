import React, { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: 'primary' | 'secondary' | 'plain';
}

export default function Button({children, type = "button", variant = 'primary'}: ButtonProps) {
  const buttonClasses = {
    'primary': 'bg-indigo-500 dark:bg-indigo-600 text-white border-indigo-600 dark:border-indigo-700 hover:bg-indigo-600 duration-200 dark:hover:bg-indigo-500 focus:ring-indigo-400/50 focus:border-indigo-400 dark:focus:border-indigo-400',
    'secondary': 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 duration-200 dark:hover:bg-zinc-800 hover:border-zinc-400 duration-200 dark:hover:border-zinc-700 focus:ring-zinc-400/30 focus:border-zinc-400 dark:focus:border-zinc-400',
    'plain': 'w-fit text-zinc-700 dark:text-zinc-100 border-transparent hover:text-indigo-600 duration-200 dark:hover:text-indigo-400 w-full text-left'
  }

  return (
    <button type={type} className={'px-2 h-[36px] min-w-[100px] rounded whitespace-nowrap relative focus:outline-none focus:ring-4 gap-1.5 border font-medium transition-colors duration-300 flex items-center justify-center ' + buttonClasses[variant]}>
      {children} {/* Include children */}
    </button>
  )
}