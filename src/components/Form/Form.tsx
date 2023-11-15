'use client';

import React from 'react';

interface FormProps { 
  onSubmit: () => void;
  children: React.ReactNode;
}

export default function Form ({ onSubmit, children }: FormProps){

  return (
    <form onSubmit={onSubmit} className="bg-white flex flex-col items-center space-y-4 w-[450px] text-left p-4 mb-4 border shadow-md rounded-lg">
      {children}
    </form>
  )
}