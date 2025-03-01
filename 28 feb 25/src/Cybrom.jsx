import { useContext } from "react";
import { myContext } from "./ColorContext";
const Cybrom=()=>{
    const {color,setColor}=useContext(myContext);
    return(
        <>
        <h1>Welcome to Cybrom :{color}</h1>
        <button onClick={()=>{setColor("green")}}>Click here</button>
        </>
    )
}
export default Cybrom;