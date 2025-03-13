import React from 'react'
import Card from '../components/Card'
import kitty from "../assets/kitty.jpg"
import bmw from "../assets/bmwproject.jpg"
import codeeditor from "../assets/codeEditor.jpg"

function Page3() {

   const img = [
      `${bmw}`,
     `${kitty}`,
     `${codeeditor}`,
    ]
     
   

  return (
    <div>
        <h1 className='text-center text-4xl font-[font2] tracking-[5px] mt-10'>Works</h1>
        <div className='md:flex md:flex-wrap justify-evenly md:flex-wrap'>
        <Card url ={img}/>
      
        </div>
    </div>
  )
}

export default Page3