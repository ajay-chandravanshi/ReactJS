 import { useState } from "react";
const App=()=>{
const [count,setCount]=useState(0);
const mydec=()=>{
      if(count<=0)
        alert("value is not present")
      else{
        setCount(count-1);
      }
}
  return(
    <>
   <center>
    <button onClick={()=>{setCount(count+1)}}>Increament</button>
    <h1>My Count:{count}</h1>
    <button onClick={mydec}>Decreament</button>
   </center>
 
    </>
  )
}
export default App;