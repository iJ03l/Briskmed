import React from 'react'
import Navbar from '../landing/Navbar'

const Connect = () => {

  return (
    <div className='Navbar h-screen w-full h-auto py-9 px-5'>
    <Navbar />
    <div className="w-full flex flex-col">
        <div className='w-full relative justify-center items-center flex flex-row'>
            <div className='search-bar'>
                <div className='grp mt-40'>
                <text>Connect Wallet</text>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Connect