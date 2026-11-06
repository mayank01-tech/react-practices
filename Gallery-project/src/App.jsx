import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setuserData] = useState([])
const [index, setindex] = useState(1)

 async function getData(){
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`)
  setuserData(response.data)

  }
  
  let  printuserdata = <h3 className='absolute top-1/2 left-1/2 text-gray-400   text-sm '>Loading.</h3>
  if(userData.length>0){
    printuserdata=userData.map(function(elem,idx){
    return <div className='ml-2'><a href={elem.url} >
    <div className='h-40 w-44 rounded-xl  relative overflow-hidden' key={idx}>
      <img src={elem.download_url} loading='lazy' className='h-full w-full object-cover rounded-xl' alt=''></img>
      <h3 className='absolute top-16 left-4 text-white  text-xl rotate-45 tracking-wide font-bold opacity-60'>{elem.author}</h3>
    </div></a></div>
  })}

useEffect(function(){
getData()
},[index])

  return (
    <div className='dark:bg-gray-500  text-white overflow-auto  h-screen '>
     <h1 className='text-xl bg-amber-400 rounded-full z-40 fixed py-2 m-2 px-4'>{index}</h1>
      <div className='p-8 flex flex-wrap gap-4'>
        {printuserdata}
      </div>
      <div className='flex justify-center text-black text-sm font-bold  items-center gap-6 mb-4 '>
        <button style={{opacity:index===1 ?0.5:1}} className='bg-amber-400 px-4 py-2 rounded active:scale-95'  onClick={function(){
         if(index>1){
          setindex(index-1)
                    setuserData([])

         }
        }}>Prev</button>
        <h3 className='dark:text-white text-black'>Page No. {index}</h3>
        <button className='bg-amber-400 px-4 py-2 rounded active:scale-95'
        onClick={function(){
          setindex(index+1)
                    setuserData([])

        }}>Next</button>
      </div>
    </div>
  )
}

export default App
