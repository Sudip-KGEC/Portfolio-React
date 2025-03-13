import React, { useState } from 'react'
import { RiMenuFoldLine } from "react-icons/ri";
import Button from './Button';
import Sidebar from './Sidebar';

function Header() {
  const [val , setVal] = useState(false);

  const sidebarHandler = () => {
    setVal(!val)
    // console.log(val)
  }

  return (
    <div className=' w-full h-20 py-2 px-5 md:px-10 md:mt-8  fixed flex z-10 justify-between items-center'>
       <img className=' h-12  md:h-15 mt-4 md:mt-2' src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_71,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png" alt="" />
        <div className='flex gap-5 p-2'>
        <Button/>
        <Sidebar   val = {val} />
        <span onClick={() => sidebarHandler()} className=' text-zinc-400 text-2xl z-100 lg:hidden '>
        < RiMenuFoldLine />
        </span> 
               
        </div>    
    </div>
  )
}

export default Header