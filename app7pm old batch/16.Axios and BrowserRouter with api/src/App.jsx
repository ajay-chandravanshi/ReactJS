import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Display from "./Display";
import Insert from "./Insert";
import Layout from "./Layout";

const App = () => {
  return (
    <center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="display" element={<Display />} />
            <Route path="insert" element={<Insert />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </center>
  );
};

export default App;