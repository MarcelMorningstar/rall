import React from 'react'

export default function Card({ title, children }) {
  return (
    <div className='w-full max-w-sm py-3 px-6 bg-white rounded-xl drop-shadow-xl'>
        <h3 className='flex flex-row items-center justify-center text-primary whitespace-nowrap'>{ title }</h3>

        <div className='w-full h-[1px] mt-1 mb-4 bg-foreground/60' />

        <div className='text-black px-2'>{ children }</div>
    </div>
  )
}
