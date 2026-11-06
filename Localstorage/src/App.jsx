import React from 'react'

const App = () => {
  localStorage.setItem("course","computer engineering")
   localStorage.setItem("user",JSON.stringify({name:"mayank",age:18}))
  console.log(localStorage.getItem("course")) 
   const data=JSON.parse(localStorage.getItem("user"))
  console.log(data)



  return (
    <div>
      App
    </div>
  )
}

export default App

