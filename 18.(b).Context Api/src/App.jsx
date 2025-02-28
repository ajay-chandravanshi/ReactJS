import Bhopal from "./Bhopal";
import { useState, createContext } from "react";
const ColorContext =createContext();

const App = () => {
  const [color,setColor]=useState("yellow");
  return (
    <>
      <button onClick={()=>{setColor("red")}}>Change Color</button>
      <h1>My App Welcome Mycolor : {color} </h1>
      <ColorContext.Provider value={{color,setColor}}>
        <Bhopal />
      </ColorContext.Provider>
    </>
  );
};
export default App;
export {ColorContext};