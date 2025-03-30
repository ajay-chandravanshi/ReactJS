import { useContext } from "react"
import { myContext } from "./LoginContext"

const AuthApp=()=>{
    const {user,logout}=useContext(myContext)
    return(
        <>
        <h1>Welcome {user.name} ! <button onClick={()=>{logout()}}> logout</button> </h1>
        </>
    )
}
export default AuthApp