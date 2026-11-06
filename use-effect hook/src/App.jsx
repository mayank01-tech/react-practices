import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  
  function achanging(){
    console.log("a is changing")
  }
  function bchanging(){
    console.log("b chang hgoya")
  }

  useEffect(()=>{
    achanging()
    
  },[num])

  useEffect(()=>{
    bchanging()
  
  },[num2])
  return (
    <div>
      <h1>change A value {num}</h1>
      <h1>change B value {num2}</h1>

      <button onClick={()=>{setnum(num+1)}}>change A</button>
      <button onClick={()=>{setnum2(num2-1)}}>change B</button>
    </div>
  )
}

export default App
