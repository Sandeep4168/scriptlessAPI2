import React from 'react'
import Response from "../components/Response"


const Validate = () => {
  return (
    <div className='flex flex-col '>
      <div className=' text-3xl flex h-[250px] align-center items-center justify-center'>
        <h2 className='text-5xl text-slate-600'>Validate Response</h2>
      </div>

      <Response/>

        <div className='flex justify-center'>
        <button

          className="mx-5 py-3 px-6 sm:w-[60%] my-6 max-w-[200px]"
        >
          Validate
        </button>
      </div>
    </div>
  )
}

export default Validate