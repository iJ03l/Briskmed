import React from 'react'
import ProfileP from '../../assets/images/hospital1.jpg'

const SideProfile = () => {
  return (
    <div className='bg-[#D9D9D9] w-[100px] rounded-r-2xl flex-1 '>
        <div className='justify-center flex-1 items-center'>
        <img src={ProfileP} alt='Profile' className='rounded-2xl w-[250px] mx-36 mt-10 h-[250px]' />
        <div className='text-center'>
        <div className='text-4xl font-bold'>Hospital Name</div>
        <div className='text-2xl p-2 text-red-500 font-bold'>Address</div>
        <div className='text-xl p-2 font-bold'>About</div>
        <div className='text-xl p-2 font-bold'>Specialtes</div>
        <div className='mt-28'>
        <ul className='flex-1 gap-5'>
            <li className=' mb-5 profile-btn'>
                <div className='capitalize bg-green-500 font-bold text-xl text-center w-full py-3 px-3' >
                <text> 13 Beds Available</text>
                </div>
            </li>
        </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SideProfile