import React from 'react';
import '../index.css';
import Navbar from './landing/Navbar';
import onestar from '../assets/images/onestar.png';
import Rate from './rating/Rating';

const ReviewPage = () => {
    return (
        <div>
        <div className='Navbar w-full h-auto py-9 px-5'>
          <Navbar /> </div>
          <div className="flex justify-center Navbar items-start h-auto pb-10">
            <div className='image-wrapper w-4/5 h-68 shadow-lg rounded-lg  object-cover flex items-start p-4 justify-start py-8 px-10 bg-gray-100 mt-4'>
                <div className='image-caption flex flex-col items-center justify-start'>
                    <img src={onestar} alt="first-black" className=' w-60 justify-start rounded-md Navbar  '/>
                    <p className='text-muted self-start  text-[30px]'>Description</p>
                    <p className='text-muted self-start text-green-700 text-[22px]'>Name</p>
                    
                </div>
            </div>
            </div>
        <div className=' w-full h-screen Navbar self-center justify-center flex-1 pt-10'>
        <div className='text-white text-xl font-semibold'>Create Hospital Profile</div>
        <input className='bg-transparent w-3/4 border-2 rounded-lg' />
        <textarea className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <div className='h-12'>
        <Rate /></div>
        <div className='bg-[#9A37E7] text-white rounded-lg px-2 ml-auto py-2'>Create Profile</div>
        </div>
        </div>
    )
}

export default ReviewPage;