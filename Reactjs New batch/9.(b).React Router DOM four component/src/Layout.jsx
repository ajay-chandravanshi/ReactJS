import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <Link to="home">Home</Link> | 
    <Link to="company">Company</Link> | 
    <Link to="contact">Contact</Link> |
    <Link to="product">Product</Link>
    <hr  size="4" color="red" />
      
      <Outlet />

    <hr  size="4" color="red" />
    www.mycompany.com all right reserved
    </>
  )
}

export default Layout
