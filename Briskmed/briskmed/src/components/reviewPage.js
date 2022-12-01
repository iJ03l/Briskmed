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
                    <img src={onestar} alt="first-black" className=' w-60 justify-start rounded-md Navbar'/>
                    <p className='text-muted self-start  text-[20px]'>comment</p>
                    <p className='text-muted self-start text-green-700 text-[22px]'>Fullname</p>
                    
                </div>
            </div>
            </div>
        <div className='grid w-full h-vh Navbar self-center justify-center flex-1 pt-10'>
        <div className='text-white mb-4 feature-header text-[44px] text-center text-xl font-semibold'><h1>WRITE REVIEW</h1></div>
        <input className='bg-transparent mb-4 pl-2 w-100 h-10 border-2 rounded-lg' placeholder='Name' />
        <input className='bg-transparent mb-4 pl-2 w-100 h-10 border-2 rounded-lg' placeholder='Comment' />
        <div className='flex h-10'>
        <Rate /></div>
        <div className='bg-[#9A37E7] h-10 text-white rounded-lg px-2 ml-auto py-2'>Send Review</div>
        </div>
        <div className='Navbar h-80'></div>
        </div>
    )
}

export default ReviewPage;