import React from 'react'

import {FaHeart} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='w-full mt-24 shadow-lg py-y px-2'>
        <div className='max-w-[1240px] flex justify-center align-center mx-auto text-3xl font-bold border-b-2 border-gray-600 py-8'>

             Made with Love 
             <div className="p-1">
             <FaHeart className="w-[30px] text-red-600"/>
             </div>
             
            </div>
    </div>
  )
}

export default Footer