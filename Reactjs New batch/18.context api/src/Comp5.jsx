import { useContext } from "react";
import { MyContext } from "./App";

const Comp5=()=>{
    const {user,setUser}= useContext(MyContext);
    return(
        
        <>
        <h1>Component -5 Welcome : {user} </h1>
        <button onClick={()=>{setUser("Yuvraj")}}>Click Here</button>
        </>
    )
}
export default Comp5;