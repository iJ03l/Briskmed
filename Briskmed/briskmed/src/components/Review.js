import React from 'react';
import '../index.css';
import Headerx from './landing/Headerx';
import Navbar from './landing/Navbar';
import onestar from '../assets/images/onestar.png';
import Hospital1 from '../assets/images/hospital1.jpg';
import { Link } from "react-router-dom";

const Review = () => {
    return (
        <div>
        <div className='Navbar w-full h-auto py-9 px-5'>
          <Navbar /> </div>
        <div className='Navbar w-full h-auto py-9 px-5'>
          <Headerx />
        </div>
        <div className="flex justify-center  items-start Navbar h-screen">
            <Link to="/Reviews" >
            <div className='image-wrapper w-100 h-68 shadow-lg rounded-lg  object-cover flex items-center p-4 justify-center py-8 px-10 bg-white'>
                <img src={Hospital1} alt="first-black" className=' h-52 w-52 rounded-lg'/>
                <div className='image-caption flex flex-col items-center justify-center'>
                    <h1 className='bold pl-5 text-[40px] font-bold'>Available Hospitals</h1>
                    <p className='text-muted text-green-700 text-[30px]'>Address</p>
                    <p className='text-muted self-start ml-4 text-[32px]'>Specialties</p>
                    <img src={onestar} alt="first-black" className=' w-40 justify-start self-start ml-4 rounded-md Navbar  '/>
                </div>
                
                <div className='Navbar justify-center  mt-40 self-end text-center text-white font-bold rounded-lg h-12 w-20'>12 beds Available</div>
            </div></Link>
            </div>
      </div>
    )
  }
  
  export default Review