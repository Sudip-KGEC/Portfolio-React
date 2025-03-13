import React, { useRef } from "react";
import Mypic from "../assets/mypic.png";
import mypic2 from "../assets/mypic2mobile.jpg";
import Tildtext from "../components/Tildtext";


const pdf_url = `http://localhost:5173/Sudip_Resume.pdf`
const profile_url = 'http://www.linkedin.com/in/sudip-ruidas-165b212b7'

function Page1() {

// const  resumeBtnHandle = (url ) => {
//   const fileName = url.split("/").pop();
//   const aTag = document.createElement("a");
//   aTag.href = url ; 
//   aTag.setAttribute("Download" , fileName) ;
//   document.body.appendChild(aTag);
//   aTag.click();
//   aTag.remove();

// }

// const tildRef = useRef(null)

// const mouseMoveHandler = (e) => {
//   console.log(e.clientX)
//   console.log(tildRef.current.getBoundingClientRect())
// }

  return (
    <div onMouseMove={(e)=> {mouseMoveHandler(e)}} className=" w-full  rounded-xl shadow-lg overflow-hidden p-4 ">
  
      <img
        src={Mypic}
        className="h-full w-full  rounded-2xl object-cover hidden md:block"
      />
       <h1 className=" absolute md:hidden  ml-[35%] translate-x-[-50%]  ">portfolio.sudip</h1>
      <img
        src={mypic2}
        className="h-full w-full rounded-2xl object-cover block md:hidden"
      />
      <div   className="md:absolute  page1-in top-[50%] left-20">
        
        <Tildtext />
     
      <div className="md:flex">
      <a href= "https://drive.google.com/file/d/1eqzB_dnQUXDwDxTOpV0tKbpin7EXXKFY/view?usp=drive_link" target="_blank">
       <button className='px-6 py-2 md:px-6 md:py-2  md:block  bg-sky-800 text-zinc-100 rounded-full mr-3 mt-4  text-xl '>Resume</button>
      </a>
      <a href={profile_url} target="_blank">
        <button className='px-6 py-2 md:px-6 md:py-2  md:block  bg-black text-zinc-100 rounded-full mt-4 text-xl '>Connect</button>
      </a>

      </div>
      
      </div>
     
 
      
      
     

    </div>
  );
}

export default Page1;
