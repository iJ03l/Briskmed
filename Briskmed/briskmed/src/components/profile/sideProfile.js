import React from 'react'
import ProfileP from '../../assets/images/hospital1.jpg'

const SideProfile = () => {
  return (
    <div className='bg-[#D9D9D9] w-[100px] rounded-r-2xl flex-1  h-full'>
        <div className='justify-center flex-1 items-center'>
        <img src={ProfileP} alt='Profile' className='rounded-2xl w-[250px] mx-36 mt-10 h-[250px]' />
        <div className='text-center'>
        <div className='text-4xl font-bold'>Hospital Name</div>
        <div className='text-2xl p-2 text-red-500 font-bold'>Address</div>
        <div className='text-xl p-2 font-bold'>Specialtes</div>
        <div className='mt-28'>
        <ul className='flex-1 gap-5'>
            <li className=' mb-5 profile-btn'>
                <button className='capitalize text-start pl-5 w-4/5 py-3 px-3' >
                <text> Ratings & Reviews</text>
                </button>
            </li>
            <li className='profile-btn'>
                <button className='capitalize text-start pl-5 w-4/5 py-3 px-3' >
                   <text> Availability</text>
                </button>
            </li>
        </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SideProfile