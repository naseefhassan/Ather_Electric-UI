// import React from 'react'
import { Image } from "../../Image";

function Base() {
  return (
    <>
      <div className="bg-black mt-28  w-screen">
        <div className="text-white text-5xl font-light text-center mb-10 ">
          <p >Hassle-free ownership.</p>
        </div>
        <div className="flex mx-20 text-white gap-3 flex-wrap  justify-center">
          <div className="min-w-[300px] sm:w-[200px] bg-slate-900 mx-10 p-6 rounded-xl  overflow-hidden">
            <img className="mb-10" src={Image.Svg1} alt="" />
           <div className="translate-y-[50px] hover:translate-y-4 duration-500 space-y-3 ">
            <p className="text-2xl">Ather Battery Protect</p>
           <p>
              A warranty that not just covers battery failure, but degradation
              too.if the battery State-of-Health falls belw 705, anytime in 5
              years,we will replace it,no questions asked.
            </p>
            <p className="flex ">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</p>
           </div>
          </div>
          <div className="min-w-[300px] sm:w-[200px] bg-slate-900 mx-10 p-6 rounded-xl  overflow-hidden">
            <img className="mb-10" src={Image.Svg2} alt="" />
              <div  className="translate-y-[70px] hover:translate-y-6 duration-500 space-y-3 ">
              <p className="text-2xl">Ather Connect</p>
            <p className="translate-y-[]">
              unlock a smarter ride with Google maps, Multi-stop Trip Planner.
              Bluetooth call & music control,theft & tow alerts and a lot more.
            </p>
            <p className="flex">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</p>
              </div>
          </div>
          <div className="min-w-[300px] sm:w-[200px] bg-slate-900 mx-10 p-6 rounded-xl  overflow-hidden ">
            <img className="mb-10" src={Image.Svg3} alt="" />
              <div  className="translate-y-[60px] hover:translate-y-6 duration-500 space-y-3 ">
              <p className="text-2xl">Ather Roadside Assistance</p>
            <p className="translate-y-[]">
              24x7 emergency assistance in case of accident,breakdown,puncture
              or when your Ather runs out of charge.Ride worry-free.
            </p>
            <p className="flex">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</p>
              </div>
          </div>
        </div>
        Svg1:Svg1,
      </div>
    </>
  );
}

export default Base;
