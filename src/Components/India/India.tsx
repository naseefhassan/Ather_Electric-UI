// import React from 'react'
import { Image } from "../../Image"

function India() {
  return (
    <>
    <div className=" sm:flex sm:mx-28 mx-3 bg-black  mt-5 sm:mt-20 space-y-[-1px] rounded-lg">
        <div className='min-w-1/2 md:w-1/2 flex flex-col justify-center items-center  '>
            <div className="text-white space-y-3 mx-5">
            <p className="text-green-600">Ather Grid </p>
            <h1 className=" text-2xl sm:text-5xl">India's largest <br />EV two-wheeler <br />fast charging <br />network</h1>
            <p className="flex  items-center underline underline-offset-4">Learn more  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

</p>
            </div>
        </div>
        <div className='min-w-1/2 md:w-1/2'> <img className="w-[100%] h-[100%]" src={Image.ather_india} alt="" /></div>
    </div>

    <div className="mt-28 ">
    <img src={Image.center} alt="" />
    </div>

    <div className="w-[80%] rounded-xl bg-white mx-auto  opacity-80 ml-[10%] mt-[-100px] ">
        <div className="sm:flex ">
            <div className=" w-1/2 space-y-2 m-10">
                <p className="text-sm">Ather Space</p>
                <p className=" text-2xl sm:text-4xl font-light">Take back all the answers.</p>
                <p className="text-2xl sm:text-4xl font-light">And a great test ride</p>
                <p className="text-2xl sm:text-4xl font-light">experience.</p>
                <p className="flex items-center underline underline-offset-8 text-sm">Locate experience centre <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</p>
            </div>
            <div className=" w-1/2 flex justify-center items-center gap-7 mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <p className="sm:text-3xl">109+</p>
                    <p>cities</p>
                </div>
                <div className="flex flex-col justify-center  items-center">
                    <p className="sm:text-3xl">153+</p>
                    <p>Ather Space</p>
                </div >
            </div>
        </div>
            <div className=" flex gap-2 flex-wrap  mx-12 items-center ">
                <p className="mr-10 mb-10">Coming soon</p>
                <div className="flex flex-wrap gap-5 text-slate-600 mb-10">
                <p>Ananthapur</p>
                <p>Anand</p>
                <p>Meerut</p>
                <p>Jammu</p>
                <p>Nanded</p>
                <p>Vapi</p>
                <p>Aizwal</p>
                <p>Gorakhpur</p>
                <p>Bhavngar</p>
                <p>Gandhidam</p></div>

            </div>
    </div>
    </>
  )
}

export default India