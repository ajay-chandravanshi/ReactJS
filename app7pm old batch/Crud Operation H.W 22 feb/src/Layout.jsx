import { Link ,Outlet } from "react-router-dom";
const Layout=()=>{
  return(
      <>
      <Link to="home">Home</Link> |
      <Link to="insert">Insert</Link> |
      <Link to="display">Display</Link> |
      <Link to="search">Search</Link> |
      <Link to="update">Update</Link> |
      <Link to="contact">Contact</Link>
      <hr size="3" color="aqua" />

      <Outlet />

      <hr size="3" color="aqua" />
      www.myemployee.com
      </>

  )
}
export default Layout;