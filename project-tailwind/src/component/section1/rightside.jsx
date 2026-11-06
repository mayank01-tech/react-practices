import React from 'react'
import RightCard from './rightcard'
const RightSide = (props) => {
  return (
    <div className=' h-full w-3/4  p-4   flex flex-row  overflow-x-auto gap-10 flex-nowrap justify-between '>
   {props.users.map(function(elem,idx){
    return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
   })}
      
    </div>
  )
}

export default RightSide
