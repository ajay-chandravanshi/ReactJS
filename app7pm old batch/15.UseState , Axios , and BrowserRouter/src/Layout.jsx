import { Link,Outlet } from "react-router-dom"
const Layout=()=>{
    return(
        <>

        <Link to="home">Home</Link> |
        <Link to="Insert">Insert</Link> |
        <Link to="display">Display</Link> |
        <hr />
        <Outlet />
        </>
    )
}
export default Layout