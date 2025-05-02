import { useContext,createContext,useState } from "react";
const myContext = createContext();
const UserContext=({children})=>{
    const [name,setName]=useState("Animesh")
    return(
        <>
         <myContext.Provider value={{name,setName}} >
           {children}
         </myContext.Provider>
        </>
    )
}
export default UserContext
export {myContext};