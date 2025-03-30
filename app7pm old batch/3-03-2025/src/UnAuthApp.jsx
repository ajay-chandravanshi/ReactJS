import { useState,useContext } from "react"
import { myContext } from "./LoginContext"

const UnAuthApp=()=>{
    const [val,setVal]=useState("")
    const{login}=useContext(myContext)
    return(
        <>
        Enter Your Name : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
        <button onClick={()=>{login(val)}}>Login !</button>
        </>
    )
}
export default UnAuthApp