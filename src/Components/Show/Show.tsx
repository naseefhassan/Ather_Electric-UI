// import React from 'react'
import { Image } from "../../Image"

function Show() {
  return (
    <>
    <div className='mx-28 flex flex-col items-center space-y-14 mt-32  '>
        <p className='text-2xl sm:text-5xl text-center'>Pick your quick.</p>
        <div className='xl:flex gap-7 space-y-10 xl:space-y-0  '>
        <div className=' bg-white rounded-xl'>
            <img className="" src={Image.red_ather} alt="" />
            <div className="space-y-3 mx-10 mt-5 ">
            <p className="text-2xl ">Ather 450X</p>
            <p className="text-slate-400 text-xs">Ahead of the best</p>
            <p className="text-sm">Starting at $137 999</p>
            
            <div className="mx-5 flex gap-2 ">
                <button className="w-1/2 mb-5 bg-slate-300 text-sm p-2 rounded-lg">Learn more</button>
                <button className="w-1/2 mb-5 bg-black text-white font-thin text-sm p-2 rounded-lg">Book a test ride</button>
            </div>
            </div>
        </div>
        <div className='bg-white rounded-xl '>
            <img className="" src={Image.White_ather} alt="" />
           <div className="space-y-3 mx-10 mt-5 ">
           <p className="text-2xl ">Ather 450X</p>
            <p className="text-slate-400 text-xs">Ahead of the best</p>
            <p className="text-sm">Starting at $129 999</p>
            <div className="mx-5 flex gap-2  ">
                <button className="w-1/2 mb-5 bg-slate-300 text-sm p-2 rounded-lg">Learn more</button>
                <button className="w-1/2 mb-5 bg-black text-white font-thin text-sm p-2 rounded-lg">Book a test ride</button>
            </div>
           </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Show