import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Product from "./pages/Product";
import NoFound from "./pages/NoFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="company" element={<Company/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="*" element={<NoFound/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
