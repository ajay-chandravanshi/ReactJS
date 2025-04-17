const AuthApp=()=>{
    const {user, logout} = useContext(mycontext),
    return(
    <>
    <h1> Welcome : {user.name} ! </h1>
    <button onclick={logout}> Logout</button>
    </>
    )
}
export default AuthApp;