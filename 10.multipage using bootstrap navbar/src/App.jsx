import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layout";
import NoPage from "./pages/NoPage";
const App=()=>{
  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="*" element={<NoPage/>} />
       <Route index element={<Home/>} />
       <Route path="home" element={<Home/>} />
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;