import { Link,Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./pages/Home";
const Layout=()=>{
    return(
        <>

<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <hr />
        <Outlet/>
        <hr />
        www.mycompany.com
        
        
        </>
    )
}
export default Layout;