import React from "react";
import {
    ArrowUpOnSquareStackIcon,
  BoltIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import supportImg from "../assets/call-center-animate.svg";

const Support = () => {
  return (
    <div name='about' className='w-full mt-24 shadow-2xl'>
      <div className='w-full h-[600px] bg-red-500 absolute'>
        {/* <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" /> */}
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative shadow-'>
          <div className='px-4 py-8 border-white'>
              <h2 className='text-3xl pt-3 text-center text-white'>About</h2>
              <h3 className='text-5xl font-bold py-3 text-center text-white'> Finding the Right Path</h3>
              
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-8 px-4 pt-4 sm:pt-20 text-black '>
              <div className='bg-white rounded-xl shadow-2xl hover:scale-105 duration-500'>
                  <div className='p-8'>
                      <ArrowUpOnSquareStackIcon className='w-16 p-4 bg-red-500 text-white rounded-lg mt-[-4rem]  border-white border-2' />
                      <h3 className='font-bold text-2xl my-6'>Upload</h3>
                      <p className='text-gray-600 text-xl'>Upload the postman collections and select the desired fields to be changed in the request body.</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:scale-105 duration-500'>
                  <div className='p-8'>
                      <BoltIcon className='w-16 p-4 bg-red-500 border-white border-2 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Execute</h3>
                      <p className='text-gray-600 text-xl'>Execute the API call based on the previous request body and get the response.</p>
                  </div>
                
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:scale-105 duration-500'>
                  <div className='p-8'>
                      <ClipboardDocumentCheckIcon className='w-16 border-white border-2 p-4 bg-red-500 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Validate</h3>
                      <p className='text-gray-600 text-xl'>Validate the response from the API call and compare against the expected values.</p>
                  </div>
                 
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
