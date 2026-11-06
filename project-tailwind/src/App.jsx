import React from 'react'
import Section1 from './component/section1/section1'
import section2 from './component/section2/section2'
let users =[
  {
    img:"https://i.pinimg.com/736x/0a/97/a1/0a97a1a47c7048184e64ca95777d82b5.jpg",
    tag:'Satisfied'
  },
  {
    img:'https://i.pinimg.com/vwebp/1200x/e6/92/15/e692151bfc86c7d523697aa0dbd1a5d0.webp',
tag:'underserved',
  },
  {
    img:'https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg',
    tag:'Unsatisfied',
  },
  {
    img:'https://i.pinimg.com/736x/61/c8/ec/61c8eca72fd85b7ff986ca402cb28f7d.jpg',
    tag:'banker',
  },
  {
    img:'https://i.pinimg.com/736x/93/64/41/936441bdd5d35416f0bf50914516e792.jpg',
    tag:'electral',
  }
  ,{
    img:'https://i.pinimg.com/736x/fe/2b/e3/fe2be30307d3f18f192345042b6f4254.jpg',
    tag:'working',
  }
]
const App = () => {
  return (
    <div >
      <Section1 users={users}/>
         {section2()}
     </div>
  )
}

export default App
