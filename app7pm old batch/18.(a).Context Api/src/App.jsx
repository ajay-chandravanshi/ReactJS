import Comp1 from "./Comp1";
import { useState,createContext } from "react";
const MyContext = createContext();
const App = () => {

  const [user,setUser]=useState("Ajay");
  return (
    <>
      <h1>My Program App Welcome : {user} </h1>
      <MyContext.Provider value={{user}}>
        <Comp1 />
      </MyContext.Provider>
    </>
  );
};
export default App;
export {MyContext};