import React from 'react'
import circle from '../../assets/svg/Vector.svg';


const Headerx = () => {
  return (
    <div className="w-full flex flex-col">
        <div className='w-full mt-[-5rem] relative justify-center items-center flex flex-row'>
            <div className='search-bar'>
                <div className='grp'>
                <img src={circle} alt="circle-placeholder" />
                <input type="text" placeholder='Hospital search..' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Headerx