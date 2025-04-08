import { useState } from "react";
const App = () => {
  const [count,setCount]=useState(0)

  const mydec=()=>{
    if(count<=0)
    {
      alert("Not Less Then 0")
    }
    else{
      setCount(count-1)
    }
  }
  return (
    <>
   <h1>My Counter App</h1>
   <div>
    <h1>My Count : {count}</h1>
    <button onClick={()=>{setCount(count+1)}} >Increament</button>
    <button onClick={mydec} >Decreament</button>
    <button onClick={()=>{setCount(0)}} >Reset</button>
   </div>
    </>
  );
};
export default App;
