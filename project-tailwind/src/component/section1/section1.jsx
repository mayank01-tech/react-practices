import React from 'react'
import navbar from './navbar'
import ContentPage from './contentpage'
const Section1 = (props) => {
  return (
    <div className='h-screen w-full '>
      {navbar()}
      <ContentPage users={props.users} />
    </div>
  )
}

export default Section1
