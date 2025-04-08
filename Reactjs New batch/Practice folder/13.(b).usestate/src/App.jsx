import { useState } from "react";
const App = () => {
  const [color,setColor]=useState("Purple")
  return (
    <>
    <h1 style={{color:color}}>My Favourite Color: {color} </h1>
    <button onClick={()=>{setColor("Green")}} >Green Color</button>
    <button onClick={()=>{setColor("Aqua")}} >Aqua Color</button>
    <button onClick={()=>{setColor("Blue")}} >Blue Color</button>
    <button onClick={()=>{setColor("Orange")}} >Orange Color</button>
    </>
  );
};
export default App;
