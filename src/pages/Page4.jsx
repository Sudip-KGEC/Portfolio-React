import React from 'react'
import linkdin from '../assets/linkedin.png'
import Social from '../components/Social'

function Page4() {
  return (
    <div className='w-full h-[70vh] mt-10 text-center text-4xl font-[font2] text-zinc-900  p-4 flex flex-col justify-center items-center'>
        <h1 className='tracking-[5px]'>Contact</h1>
        <form className="input w-full md:w-[80vw]  h-full text-xl justify-center items-center flex flex-col gap-6 px-3 py-4">
            <input type="text" placeholder='Enter Name' className='w-full border-red-500 rounded-md px-2 py-1 outline-none bg-zinc-300  border border-zinc-100'/>
            <input type="email" placeholder='Enter email' className='w-full rounded-md px-2 py-1 outline-ofset-2 outline-none bg-zinc-300  border border-zinc-100'/>
            <input type="number" placeholder='Enter mobile No' className='w-full rounded-md px-2 py-1 outline-none bg-zinc-300 shadow-lg shadow-indigo-500/50 border border-zinc-100 '/>
            <textarea name="msg" placeholder='enter messege' className='w-full md:h-[10vh] outline-none bg-zinc-300   px-2 py-1 border border-indigo-500 '></textarea>
            <button className=' bg-blue-400 rounded-md w-full md:w-[40vw] px-6 py-3 '>Send </button>
        </form>


        <div className="social w-full flex  items-center justify-center gap-3">
        <a href="http://www.linkedin.com/in/sudip-ruidas-165b212b7" target='_blank'><img src={linkdin} className='w-[30px] mr-1 opacity-98 mt-1 color-zinc-700 text-center' /></a>
       <a href="https://github.com/Sudip-KGEC" target='_blank'><i className="ri-github-fill"></i></a> 
       <a href="#"></a> <i className="ri-youtube-fill"></i>

        {/* <Social/> */}
        </div>

        <p className=' text-[10px] md:text-sm mt-2'>Copyright © 2025 Sudip_KGEC</p>
        </div>
  )
}

export default Page4