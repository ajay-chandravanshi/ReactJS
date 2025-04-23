import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoFound from "./pages/NoFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Placement from "./pages/Placement";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="placement" element={<Placement/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NoFound/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
