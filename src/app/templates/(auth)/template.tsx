'use client'

import { useState } from 'react';
import Link from "next/link";

const navigations = [
  { title: 'Login', href: '/templates/login' },
  { title: 'Register', href: '/templates/register' },
]

export default function TemplateLayout(
  { children }: Readonly<{ children: React.ReactNode; }>
) {
  const [inputVal, setInputVal] = useState('');

  return (
    <div className="m-10 min-h-7/12">
      <div style={{ padding: '10px', background: 'rgb(129 148 183)' }}>
        {navigations.map(nav => {
          return (
            <Link className={`mr-10 hover:bg-amber-400 pt-2 pb-2 pl-4 pr-4 rounded-sm`} key={nav.title} href={nav.href}>{nav.title}</Link>
          )
        })}
      </div>
      <div className="mt-10 mb-10">
        <input className="bg-white text-amber-600 font-bold" type="text" value={inputVal} onChange={(e) => {
          setInputVal(e.target.value)
        }} />
      </div>
      {children}
      <button className="mt-6 bg-blue-400 hover:bg-amber-500 rounded-sm pt-3 pb-3 pl-2 pr-2">
        SUBMIT
      </button>
    </div>
  );
}
