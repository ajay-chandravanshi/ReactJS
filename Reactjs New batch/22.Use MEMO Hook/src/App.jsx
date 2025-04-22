import { useState,useMemo } from "react"

const App = () => {
  const [add,setAdd]=useState(0)
  const [sub,setSub]=useState(100)
  const MyMulti=useMemo(()=>{
    return add*2
  },[add]);

  return (
  <>
  <h1>Welcom to useMemo Hook</h1>
  <h1>Multipliction :{MyMulti} </h1>
  <button onClick={()=>{setAdd(add+1)}} >Increment</button>
  <h3>Increment : {add} </h3>
  <button onClick={()=>{setSub(sub-1)}} >Decrement</button>
  <h3>Decrement : {sub} </h3>
  
  </>
  )
}

export default App
