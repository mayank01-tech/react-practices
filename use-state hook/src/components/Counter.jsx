import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [first, setfirst] = useState(2000)
    function changenum(){
        setfirst(first+1)
    }
    function decreasenum(){
        if(first>0){
            setfirst(first-1)
        }
    }
  return (
    <div  className='flex justify-center items-center h-screen  '>
        <div className='flex flex-col '>
      <h1 className= ' tracking-widest text-white text-[200px] font-extrabold'>{first}</h1>
      <div className='flex  justify-center gap-7'>
     <button className='px-12  py-2 mt-2 rounded-full font-bold tracking-wide text-1xl text- text-blue-500 outline outline-blue-700'  onClick={changenum} >increase </button>
      <button className=' px-12 py-2 mt-2 rounded-full font-bold tracking-wide text-1xl text- text-blue-500  outline outline-blue-700' onClick={decreasenum} >decrease </button>
      </div>
     </div>
    </div>
  )
}

export default  Counter;
