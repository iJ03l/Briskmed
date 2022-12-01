import React from 'react'
import building from "../../assets/images/building.png"




const Create = () => {

  return (
    <div className='grid w-full h-full place-items-center'>
        <div className='text-white text-3xl p-5 font-bold'>Create Hospital Profile</div>
          {/* {file ?
            <Image src={URL.createObjectURL(file)} width="150px" height="100px" className=' border-x-white border-r-2' />
            : */}
          <img src={building} width="300px" height="200px" />
          <text className=' text-white w-[426px] py-2 px-2 -mb-2 ' >Hospital Image:</text>
          <input type="file" className='border-[#EAEDEE] rounded-[12px] text-white w-[426px] py-2 px-2 h-[50px] border-2' accept="image/*" />
          <text className=' text-white w-[426px] py-2 px-2 -mb-2 ' >Name:</text>
          <input maxLength="130" className='w-[426px] h-[50px] bg-transparent rounded-[12px] text-white border-2 pl-2' placeholder='Hospital Name' />
          <text className=' text-white w-[426px] py-2 px-2 -mb-2 ' >License:</text>
          <input type="file" className='border-[#EAEDEE] rounded-[12px] text-white w-[426px] py-2 px-2 h-[50px] border-2' accept="image/*" />
          <text className=' text-white w-[426px] py-2 px-2 -mb-2 ' >Location:</text>
          <input className='w-[426px] h-[50px] bg-transparent rounded-[12px] text-white border-2 pl-2' placeholder='Hospital address' />
          {/* <input type="text" value={latitude} className='w-[426px] h-[50px] bg-transparent rounded-[12px] text-white border-2 pl-2' />
        <input type="text" value={longitude} className='w-[426px] h-[50px] bg-transparent rounded-[12px] text-white border-2 pl-2' /> */}
          <text className=' text-white w-[426px] py-2 px-2 -mb-2 ' >Description:</text>
          <textarea maxLength="40" className='w-[426px] h-[121px] rounded-[12px] text-white bg-transparent border-2 px-2' placeholder='Specialties' />
          <div className=' bg-white hover:bg-gray-500 cursor-pointer text-[14px] h-[41px] rounded-[12px] text-center px-2 py-2 mt-4 self-end w-[150px] text-black'>Create Profile</div>
          <br />
          <br />
        {/* <input className='bg-transparent w-1/3 border-2 rounded-lg' />
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <input className='bg-transparent w-1/3 border-2 rounded-lg'/> 
        <textarea className='bg-transparent w-1/3 border-2 rounded-lg'/>
        <div className='bg-[#9A37E7] text-white rounded-lg px-2 ml-auto py-2'>Create Profile</div> */}
    </div>
  )
}

export default Create