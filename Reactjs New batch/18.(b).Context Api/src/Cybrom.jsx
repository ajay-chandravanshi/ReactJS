import { useContext, useState } from "react"
import { ColorContext } from "./App"
const Cybrom=()=>{
    const {color,setColor} = useContext(ColorContext);
    return(
        <>
        <h1>Welcome To Cybrom : {color}</h1>
        <button onClick={()=>{setColor("pink")}}>Click Here</button>
        </>
    )
}
export default Cybrom