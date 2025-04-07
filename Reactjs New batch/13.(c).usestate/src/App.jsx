import { useState } from "react";
import { Button } from "bootstrap";
const App = () => {
  const [count, setCount] = useState(0);

  const mydec=()=>{
    if(count<=0)
      {
        alert("Not less than O")
      }
      else{
        {setCount(count-1)}
      }
  }
 
  return (
    <>
      <h1 align="center">My Counter App</h1>
      <div
        style={{
          border: "2px solid green",
          padding: "20px",
          borderRadius: "30px",
          backgroundColor: "lightgreen",
          width: "400px",
          margin: "auto",
        }}
      >
        <h1>My Count : {count}</h1>
        <button onClick={()=>{setCount(count+1)}} >Increment</button>
        <button onClick={mydec} >Decrement</button>
        <button onClick={()=>{setCount(0)}} >Reset</button>
      </div>
    </>
  );
};
export default App;
