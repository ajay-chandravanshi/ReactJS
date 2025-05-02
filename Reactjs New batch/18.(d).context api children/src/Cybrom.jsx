import { useContext } from "react"
import { myContext } from "./UserContext"
const Cybrom=({children})=>{
    const {name}=useContext(myContext);
    return(
        <>
        <h1>Welcome To Cybrom{name}</h1>
        
        </>
    )
}
export default Cybrom