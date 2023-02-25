import React from "react";
import {
  CloudIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import Typed from "react-typed" 

import { Link } from "react-scroll";
import bgImg1 from "../assets/31.jpg";



const Hero = () => {
  return (
    <div name='home' className='w-full h-screen  bg-zinc-200 flex flex-col justify-between'>

      <div className="">
        <img src={bgImg1} alt="BackgroundImage" className="object-cover h-screen w-screen" />
      </div>
      
        <div className=' absolute grid md:grid-cols-2 max-w-[1240px] my-10 mx-10 justify-center'>
            <div className='flex flex-col justify-center m-4  w-full px-10 py-[80px] sm:py'>
              <div className='flex flex-col'>
              <p className='text-2xl md:text-3xl text-red-500 pb-3'>Welcome to OCBC</p>
                {/* <h1 className='py-3 text-5xl md:text-7xl font-bold '>Scriptless API</h1> */}
                <Typed className='py-6 text-5xl md:text-6xl '
                strings={["Getting tired of scripting?","Here is the solution","Scriptless API"]}
                typeSpeed={100}
                backSpeed={50}
                />
                
                
                <p className='text-2xl md:text-3xl '>API Scripting made easy</p>
              </div>
                <div className="left-3 max-w-[300px]">
                <Link to="upload" smooth={true} offset={-200} duration={500}>
                <button className='py-3 px-6 sm:w-[60%] my-6 max-w-[300px]'>Get Started</button>
              </Link>
                
                </div>
                
            </div>
                       
        </div>
      
    </div>
  );
};

export default Hero;
