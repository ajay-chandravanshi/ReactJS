import { useState } from "react";
const App = () => {
const [color,setColor]=useState("red")
  return (
    <>
     <h1 style={{color:color}} >My favourite color : {color}</h1>
    <button onClick={()=>{setColor("Green")}}>Green color</button>
    <button onClick={()=>{setColor("Pink")}}>Pink color</button>
    <button onClick={()=>{setColor("Orange")}}>Oragne color</button>
    <button onClick={()=>{setColor("Blue")}}>Blue color</button>
    </>
  );
};
export default App;
