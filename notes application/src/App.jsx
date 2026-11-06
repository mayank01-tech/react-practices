import React, { useState } from 'react'


const App = () => {
  const [Input, setInput] = useState('')
  const [Textarea, setTextarea] = useState('')
 const [Task, setTask] = useState([])

  const handlesubmit=(e)=>{
    e.preventDefault()
            const copyTask=[...Task]
            copyTask.push({Input,Textarea})
            setTask(copyTask)
    setInput('')
    setTextarea('')

  } 


const deleteNote=(idx)=>{
  const copyTask=[...Task]
  copyTask.splice(idx,1)
  setTask(copyTask)
}
  return (
    <div className='h-full w-full  bg-black text-white flex flex-col items-center justify-center  ' >
              <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />
      <div className=' h-[350px] max-w-[350px] border-4 border-purple-400 flex justify-center items-center rounded-4xl relative ml-auto mr-auto  mt-20'>
    <img src="src/assets/teddy png.png"  className=' hidden absolute h-[120px] top-[67%]  left-[69%] lg:flex '></img>
    <img src="src/assets/teddy png.png"  className=' hidden absolute h-[120px] top-[-2%] rotate-180 left-[-4%] lg:flex '></img>
    <img src="src/assets/teddy png.png"  className=' flex absolute h-[120px] top-[67%]  left-[69%] lg:hidden '></img>
    <img src="src/assets/teddy png.png"  className=' flex absolute h-[120px] top-[-2%]  left-[-4%] rotate-180 lg:hidden '></img>
              <form  className="inline-flex  p-10 flex-col gap-2.5 justify-between " onSubmit={(e)=>{handlesubmit(e)}}>
        <input type='text' 
        placeholder="Enter Task"
       className='px-7 py-2 border-2 rounded-2xl border-purple-300 outline-none '
        value={Input}
        onChange={(e)=>{setInput(e.target.value)}}
        ></input>
        <textarea type='text' placeholder='Enter Details'
        className='px-7 
        py-2
         border-2
          rounded-2xl h-[100px]
           border-purple-300 outline-none'
           onChange={(e)=>{setTextarea(e.target.value)}}
             value={Textarea}></textarea>
           <button  className='bg-purple-500 p-2 rounded-t-xl rounded-b-4xl active:bg-purple-800 active:scale-75 cursor-pointer'>Add Notes</button>
      </form>
      </div>
    <div className='h-full mt-[25px] w-[80%] p-20'>
      <h1 className='text-white'>Recent Tasks</h1>
      <div className=' flex flex-wrap gap-5 mt-6 h-full overflow-auto' >
        {Task.map((e,idx)=>{
                         return (
                         <div  key={idx} className='bg-cover text-black h-52 w-44 p-10 bg-[url(https://i.pinimg.com/736x/70/8f/b2/708fb2dd96b00fdfdabd4b389f029feb.jpg)] rounded-xl'>
                          <h3 className=' text-black font-black'>{e.Input}</h3>
                          <p className='text-black'>{e.Textarea}</p>
                                                                              <button className='text-red-600' onClick={()=>{deleteNote(idx)}} >X</button>
</div>

                          )
                         

        })}


      </div>
    </div>
      </div>
  )
}

export default App

