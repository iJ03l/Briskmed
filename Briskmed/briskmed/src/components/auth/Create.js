import React from 'react'

const Create = () => {
  return (
    <div className='grid w-full h-full place-items-center'>
        <div className='text-white text-xl font-semibold'>Create Hospital Profile</div>
        <input className='bg-transparent w-1/3 border-2 rounded-lg' />
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/> 
        <textarea className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <div className='bg-[#9A37E7] text-white rounded-lg px-2 ml-auto py-2'>Create Profile</div>
    </div>
  )
}

export default Create