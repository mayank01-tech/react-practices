import React from 'react'
import {MoveUpRight } from 'lucide-react'
import herotext from './herotext'
import arrow from './arrow'
const LeftSide = () => {
  return (
    <div className='  h-full w-1/3 flex flex-col justify-between'>
     {herotext()}
     {arrow()}
    </div>
  )
}

export default LeftSide
