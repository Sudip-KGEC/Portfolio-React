import React from 'react'

function Sidebar({val}) {
   let links = ["Home" , "About" , "Skills" , "Contact"]

  return (

   val == true &&
    <div className='absolute top-5 right-4 rounded-md w-[50vw] bg-zinc-700 h-[78vh] opacity-40 px-2 py-6 md:w-[30vw] md:h-full'>
     <ul className='w-full h-full flex flex-col opacity-100 text-white justify-start items-center gap-5 py-6 md:mt-20 md:gap-8'>
        {links.map((item , index) =>{
           return <li key={index}>{item}</li>
        })}
     </ul>
</div>
  
  )}

export default Sidebar