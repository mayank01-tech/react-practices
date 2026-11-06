
import React from 'react'
import RightCardContent from './rightcardcontent'
const RightCard = (props) => {
  return (
    <div className=' h-full w-60  shrink-0 rounded-4xl overflow-hidden relative'>
    <img className='h-full object-cover w-full ' src={props.img} alt="img"></img>
     <RightCardContent tag={props.tag} id={props.id} key={props.key}/>
    </div>
  )
}

export default RightCard
