
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./Insert";
import Contact from "./Display";
import Layout from "./Layout";
const App = () => {

  return (
    <>
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>} >
       <Route index element={<Home/>} />
       <Route path="home" element={<Home/>} />
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
};
export default App;