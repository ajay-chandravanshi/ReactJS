import { useState,useEffect } from "react";
const App = () => {
const [count,setCount]=useState(0)
const [multi,setMulti]=useState(0)

useEffect(()=>{
 setMulti(count*2)

},[count])

  return (
    <>
    <h1>My Counter :{count} </h1>
    <h2>Multiplication : {multi} </h2>
    <button onClick={()=>{setCount(count+1)}} >Click Here</button>
    </>
  );
};
export default App;
