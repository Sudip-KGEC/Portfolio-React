import React, { useRef } from "react";
import Mypic from "../assets/mypic.png";
import mypic2 from "../assets/mypic2mobile.jpg";
import Tildtext from "../components/Tildtext";


const pdf_url = `http://localhost:5173/Sudip_Resume.pdf`
const profile_url = 'http://www.linkedin.com/in/sudip-ruidas-165b212b7'

function Page1() {

const  resumeBtnHandle = (url ) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url ; 
  aTag.setAttribute("Download" , fileName) ;
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();

}

const tildRef = useRef(null)

const mouseMoveHandler = (e) => {
  console.log(e.clientX)
  console.log(tildRef.current.getBoundingClientRect())
}

  return (
    <div onMouseMove={(e)=> {mouseMoveHandler(e)}} className=" w-full  relative rounded-xl shadow-lg overflow-hidden p-4 ">
  
      <img
        src={Mypic}
        className="h-full w-full  rounded-2xl object-cover hidden md:block"
      />
       <h1 className=" absolute md:hidden  ml-[35%] translate-x-[-50%]  ">portfolio.sudip</h1>
      <img
        src={mypic2}
        className="h-full w-full rounded-2xl object-cover block md:hidden"
      />
      <div  ref={tildRef} className="md:absolute relative page1-in top-[50%] left-20">
        <div id="tilt_Div w-full">
        <Tildtext />
        </div>
    
      <div className="md:flex">
      <button onClick={() => resumeBtnHandle(pdf_url )} className='px-6 py-2 md:px-6 md:py-2  md:block  bg-sky-800 text-zinc-100 rounded-full mr-3 mt-4  text-xl '>Resume</button>
      <a href={profile_url} target="_blank"><button className='px-6 py-2 md:px-6 md:py-2  md:block  bg-black text-zinc-100 rounded-full mt-4 text-xl '>Connect</button></a>

      </div>
      
      </div>
     
 
      
      
     

    </div>
  );
}

export default Page1;
