import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="home">Home</Link>
        <Link to="insert">Insert</Link>
        <Link to="display">Display</Link>
      </nav>

      <hr />
      <Outlet />
      <hr />
    </>
  );
};

export default Layout;