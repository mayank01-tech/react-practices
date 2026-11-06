import React from 'react'
import LeftSide from './leftside'
import RightSide from './rightside'
const ContentPage = (props) => {
  return (
    <div className='flex pb-15 pt-6  px-6 gap-10 h-[90vh]   '>
      <LeftSide/>
<RightSide users={props.users}/>
    </div>
  )
}

export default ContentPage
