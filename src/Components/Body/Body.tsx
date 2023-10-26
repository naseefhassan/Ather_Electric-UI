// import React from 'react'
import vediobg from '../../assets/Image/Ather 450X .mp4'

function Body() {
  return (
    <>
    <div className="mx-12 my-10 ">
    <video className='rounded-lg w-screen' src={vediobg} autoPlay loop muted/>
    

    </div>
    </>
  )
}

export default Body