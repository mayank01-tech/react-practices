import React, { useState } from 'react'

const App = () => {
      const [Data, setData] = useState([])

  async function getdata() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const newdata = await data.json()
      setData(newdata)

  }
  return (
    <div >
      <button onClick={getdata}>get data</button>
     {Data.map((item)=>(
    <p key={item.id}>{item.title}</p>
     ))}
    </div>
  )
}

export default App
