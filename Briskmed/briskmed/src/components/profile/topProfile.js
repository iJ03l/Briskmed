import React from 'react'

const TopProfile = () => {
  return (
    <div className='bg-[#D9D9D9] w-[900px]'>
      <div className='flex flex-col border-3 w-full p-5 gap-5 border-gray-700'>
      <div className='text-white feature-header self-center text-[44px] text-center text-xl font-semibold'><h1>SET SPACE AVAILAIBILITY</h1></div>
      <div className='flex gap-2 flex-col '>
                    <label className='font-bold text-black' >Rating</label>
                    <input type='number' className='bg-transparent text-black pl-2 border-black w-100 h-10 border-2 rounded-lg' placeholder='Bed Space' />
                    <div className='bg-[#9A37E7] h-10 text-white rounded-lg px-2 ml-auto py-2 cursor-pointer'> Update
                    {/* {loading ? "Loading..." : "update"} */}
                </div>
                </div>                       
      </div>
    </div>
  )
}

export default TopProfile