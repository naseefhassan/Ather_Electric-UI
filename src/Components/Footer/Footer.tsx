// import React from 'react'
import { Image } from "../../Image"


function Footer() {
  return (
   <>
   <div className='bg-white font-small text-xs mt-10 py-10 rounded-lg mx-3 p-2 mb-1'>
    <p className='text-center mx-14 text-slate-600 leading-3'>Disclaimer:All specifications/figures are indicative only and subject to requisite certification(s). Declared certified range figures are as per ARAI IDC standard testing conditions, actual performance figures may vary depending on various conditions including driving patterns etc. Degradation/performance of the battery shall be solely determined by Ather. Ather may form partnerships or alliances with third parties from time to time in order to facilitate the provision of its products and services.  Specifications, pricing and product availability are subject to change without notice. Prices shown for Pro and Ather Battery Protect are discounted and will be applicable only if the customer purchases them along with the scooter. Images shown on the website are for representation purposes only. To know more about the inclusions refer to the Specifications or visit your nearest Ather Space. To know all about the change in product configurations and inclusions get in touch with your nearest Ather Space. Please follow applicable laws while using the vehicle. Ather Energy's trademarks are listed at https://atherenergy.com/trademarks. All third party trademarks (including words, logos and icons) referenced by Ather Energy Private Limited remain the property of their respective owners. Ather Grid map shown is only indicative and not an exact representation of the GPS coordinates of the Ather Grid locations.</p>
   </div>

   <div className="flex bg-rose-200 rounded-lg mx-3 justify-around items-center p-4 mb-1">
    <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
</svg> Caution Notice
</p>
<p>Beware of scammers in Ather's clothing. Don't get tricked into frauds.</p>
<p className="underline underline-offset-4 flex gap-2 items-center">Learn more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</p>
   </div>
   <div className="bg-zinc-900 mx-3 rounded-lg mb-5">

    <div className="text-white flex justify-around sm:mx-20 flex-wrap text-sm">
      <div className="space-y-3 sm:mt-10  h-42 w-40 mt-5 ">
        <p className="text-stone-500">Explore</p>
        <p>Ather 450X</p>
        <p>Ather 450S</p>
        <p>charging</p>
        <p>Ather Unlocked</p>
      </div>
      <div className="space-y-3 sm:mt-10 h-42 w-40 mt-5 ">
        <p className="text-stone-500">Shop</p>
        <p>Accessories</p>
        <p>Merchandise</p>
      </div>
      <div className="space-y-3 sm:mt-10 h-42 w-40 mt-5 ">
        <p className="text-stone-500">Ownership</p>
        <p>Ather Battery Protect</p>
        <p>Ather Connect</p>
      </div>
      <div className="space-y-3 sm:mt-10 h-42 w-40 mt-5 ">
        <p className="text-stone-500">Partnership</p>
        <p>Retail Patnership</p>
        <p>ather Corporate Program</p>
      </div>
      <div className="space-y-3 sm:mt-10 h-42 w-40 mt-5 ">
        <p className="text-stone-500">Support</p>
        <p>Community</p>
        <p>FAQs</p>
        <p>Help & Support</p>
        <p>Sitemap</p>
      </div>
      <div className="space-y-3 sm:mt-10 h-42 w-40 mt-5 ">
        <p className="text-stone-500">Company</p>
        <p>Story</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
    </div>

    <div className="text-white sm:mx-24 mt-20 sm:flex items-center justify-between mx-7">
     <img   src={Image.Footer} alt=""/>
     <ul className="flex gap-3 text-xs flex-wrap">
      <li>Terms</li>
      <li>Privacy policy</li>
      <li>Credit usage policy</li>
      <li>Refund policy</li>
      <li>Warranty</li>
      <li>Subscription</li>
      <li>Corporate</li>
      <li>Trademarks</li>
      <li>code of ethics</li>
      <li>Bug Bounty</li>
     </ul>
     
    </div>
    <div className="text-white  flex">
      <div className="sm:flex justify-around items-center gap-5  border-t-2   sm:mx-24 mt-10 text-xs text-slate-600">
        <div className="mt-5 mb-20 w-1/3 mx-auto">
          <p >Registered office address</p>
          <p>Ather Energy Private Limited, 3rd Floor, Tower D, IBC Knowledge Park, #4/1, Bannerghatta Main Road, Bangalore, Karnataka 560029, India</p>
        </div>
        <div className="mt-5 mb-20 w-1/3 mx-auto">
          <p>Registered office address</p>
          <p>Ather Energy Private Limited, 3rd Floor, Tower D, IBC Knowledge Park, #4/1, Bannerghatta Main Road, Bangalore, Karnataka 560029, India</p>
        </div>
        <div className="mt-5 mb-20 w-1/3 mx-auto">
          <p>Registered office address</p>
          <p>Ather Energy Private Limited, 3rd Floor, Tower D, IBC Knowledge Park, #4/1, Bannerghatta Main Road, Bangalore, Karnataka 560029, India</p>
        </div>
      <div className="flex flex-col items-center justify-center ">
        <img src={Image.end} alt="" />
        <p className="text-right">All information is subject to specific conditions.
© 2023 Ather Energy. All rights reserved</p>
      </div>
      </div>
    </div>
   </div>
   <div>
    
   </div>
   </>
  )
}

export default Footer