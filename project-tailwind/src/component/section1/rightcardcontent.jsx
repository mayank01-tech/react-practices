import React from 'react'
import { MoveRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
        <div className='absolute  top-0 left-0 h-full w-full  flex flex-col justify-between p-4'>
        <h2 className='bg-white    text-2xl rounded-full flex justify-center items-center w-8 h-8'>{props.id+1}
         </h2>
         <div>
         <p className=' text-white mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iste adipisci dolor commodi, cum recusandae.</p>
         <div className=' flex justify-between'>
             <button className='bg-blue-600 text-white font-serif px-8 py-1 rounded-full ' >{props.tag}</button>
         <button className='bg-blue-600 text-white font-serif px-2 py-2 rounded-full ' ><MoveRight size={15}/></button>
         </div>
        
         </div>
    </div>
  )
}

export default RightCardContent
