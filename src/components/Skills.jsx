import React from 'react'
import 'remixicon/fonts/remixicon.css'
import mysql from "../assets/Mysql--Streamline-Svg-Logos.svg"

import { DiMongodb } from "react-icons/di";

function Skills() {
  return (
    <div className='w-full h-full px-6 py-1 mt-4'>
       <h1 className='text-center text-4xl font-[font2] tracking-[5px] '>Skills</h1>
       <div className='w-full text-8xl text-green-500 py-4 flex flex-wrap gap-4 justify-center gap-6 mt-5 '>
       <i className="ri-html5-fill text-orange-600"></i>
       <i className="ri-css3-line text-blue-500"></i>
       <i className="ri-javascript-fill text-yellow-400"></i>
       <i className="ri-reactjs-line text-blue-600"></i>
       <i className="ri-nodejs-line text-green-600"></i>
       <i className="ri-tailwind-css-fill text-blue-500"></i>
       <DiMongodb />
       <img src={mysql} className='h-14'/>
       </div>
        </div>
  )
}

export default Skills