import { useState } from "react";
import { createContext } from "react";
const myContext=createContext();
const ColorContext=({Children})=>{
    const [color,setColor]=useState("red")
    return(
        <>
        <myContext.Provider value={{color,setColor}}>
            {Children}
        </myContext.Provider>
        
        </>
    )
}
export default ColorContext;
export {myContext}