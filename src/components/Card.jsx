import React from "react";
import 'remixicon/fonts/remixicon.css'

function Card({url}) {
  return (
  url.map((item,index) => {
return <div className="card px-2 w-full rounded-full object-cover flex flex-col justify-center items-center mt-4 md:w-[45vw]">
<img
  src={item}
  className="rounded-2xl "
/>
<button className="h-10 w-10 rounded-full absolute bg-black text-zinc-100 text-center mt-[25vh] "> <i class="ri-arrow-right-up-long-fill"></i></button>
</div>
  })
      
  
  );
}

export default Card;
