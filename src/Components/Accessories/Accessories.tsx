// import React from 'react'
import Ather_Accessories from '../../assets/Image/Accesserioes.mp4'
import { Image } from '../../Image'

function Accessories() {
  return (
    <>
    <div>
        <div className="mt-[100px]  ">
            <p className="text-5xl text-center">Top up your Ather experience.</p>
        </div>
        <div className="sm:flex justify-center mt-10 mx-5 sm:mx-28 gap-5 ">

          <div className='sm:w-1/2'>
            
         <video className=' rounded-lg' src={Ather_Accessories} autoPlay loop muted/>
        <div className='mt-5 space-y-3'>
        <p>Accessories</p>
         <p>Wonderful. Purposeful.</p>
         <p className=' flex gap-2 items-center underline underline-offset-4'>View accessories <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</p>
        </div>
           </div>
          <div className="sm:w-1/2 ">
          <img className='rounded-lg md:h-[147px] lg:h-[220px] xl:h-[310px] 2xl:h-[655px] ' src={Image.Photo} alt="" /> 
          <div className='mt-5 space-y-3'>
        <p>Merchandise</p>
         <p>Apparel. Made of Ather</p>
         <p className=' flex gap-2 items-center underline underline-offset-4'>Shop Merchandise <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</p>
        </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Accessories
{/* <video className='rounded-lg ' src={Ather_Accessories} autoPlay loop muted/>    
            <img className='rounded-lg ' src={Image.Photo} alt="" /> */}

            // <video className='w-[100%] h-[100%]' src={Ather_Accessories} autoPlay loop muted/>
