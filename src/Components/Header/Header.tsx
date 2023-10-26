// import React from 'react'
import { Image } from "../../Image"

function Header() {
  return (
  <>
  <div className="h-28 border-b-2">
    <div className="bg-black h-1/2 flex justify-center items-center">
        <p className="text-green-200 text-sm text-center">Celebrations have begun! Take home an Ather at just $  86050 <span className="text-white underline ml-2 font-semibold underline-offset-4">Know more</span></p>
    </div>
    <div className="h-1/2  flex items-center justify-between sm:mx-12 " >
        <div className="flex gap-1 sm:gap-3 text-xs items-center ">
            <img className="w-6 " src={Image.ather} alt="" />
            <p>Ather 450X</p>
            <p>ather 450S </p>
            <div className="bg-green-600 p-2 h-5 text-white  flex justify-center items-center rounded-full">New</div>
        </div>
        <div className="flex gap-1 sm:gap-3 text-xs items-center">
            <p>Charging</p>
            <p>shop</p>
            <p>Accessories</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </div>
    </div>

  </div>
  </>
  )
}

export default Header