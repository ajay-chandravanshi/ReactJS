import { useState } from "react";

const App = () => {
  const [name,setName]=useState("Ajay")
  return (
    <>
    <h1>Welcome to my company {name}</h1>
    <button onClick={()=>{setName("Yuvraj")}} >Click Here</button>
    </>
  );
};
export default App;
