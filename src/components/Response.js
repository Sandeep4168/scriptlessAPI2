import React from 'react'

import { CheckIcon } from "@heroicons/react/24/solid"

const Response = () => {
    return (
        <div name="response" className='w-full text-white'>
            <div className='w-full h-[800px] bg-red-400 absolute mix-blend-overlay'> </div>

            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center py-8 text-slate-300'>
                    
                </div>
                <div className='grid md:grid-cols-2 '>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative hover:scale-105 duration-500'>
                       
                        <div>
                            <p className='text-4xl font-bold py-4 flex'>Actual Response</p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie dui justo.</p>
                        <div className="text-2xl relative">
                            <div className='max-w-[300px] px-2 py-3'>

                                <label className=' text-2xl text-slate-600 ' for="vehicle1">Status Code </label><br />
                                <input type="text" id="vehicle1" value="500" name="vehicle1"  className=' w-[350px] h-[30px] border-2 border-gray-500 rounded-md p-4 my-2 shadow-inner bg-red-600' />

                            </div>
                            <div className='max-w-[300px] px-2 py-3'>

                                <label className=' text-2xl text-slate-600 ' for="vehicle1">Status </label><br />
                                <input type="text" id="vehicle1" value="Fail" name="vehicle1"  className=' w-[350px] h-[30px] border-2 border-gray-500 rounded-md p-4 my-2 shadow-inner bg-red-600' />

                            </div>
                            <div className='max-w-[300px] px-2 py-3'>

                                <label className=' text-2xl text-slate-600 ' for="vehicle1">Response </label><br />
                                <textarea type="text" id="vehicle1" value={JSON.stringify({Book:"Eiry of the Hill",orderId:"12NvXgibc8",place:"Bangalore",firstName:"Camp",lastName:"Bell"},null,4)} name="vehicle1"  className=' w-[350px] h-[300px]  border-2 border-gray-500 rounded-md p-4 my-2 shadow-inner bg-white' />

                            </div>
                        </div>
                    </div>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative hover:scale-105 duration-500'>
                        
                        <div>
                            <p className='text-4xl font-bold py-4 flex'>Exptected Response</p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie dui justo.</p>
                        <div className="text-2xl relative">
                            <div className='max-w-[300px] px-2 py-3'>

                                <label className=' text-2xl text-slate-600 ' for="vehicle1">Status Code </label><br />
                                <input type="text" id="vehicle1" value="200" name="vehicle1"  className=' w-[350px] h-[30px] border-2 border-gray-500 rounded-md p-4 my-2 shadow-inner bg-green-300' />

                            </div>
                            <div className='max-w-[300px] px-2 py-3'>

                                <label className=' text-2xl text-slate-600 ' for="vehicle1">Status </label><br />
                                <input type="text" id="vehicle1" value="Pass" name="vehicle1"  className=' w-[350px] h-[30px] border-2 border-gray-500 rounded-md p-4 my-2 shadow-inner bg-green-300' />

                            </div>
                            <div className='max-w-[300px] px-2 py-3'>

                                <label className=' text-2xl text-slate-600 ' for="vehicle1">Response </label><br />
                                <textarea type="text" id="vehicle1" value={JSON.stringify({Book:"Eiry of the Hill",orderId:"12NvXgibc8",place:"Bangalore",firstName:"Camp",lastName:"Bell"},null,4)} name="vehicle1"  className=' w-[350px] h-[300px]  border-2 border-gray-500 rounded-md p-4 my-2 shadow-inner bg-white' />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Response