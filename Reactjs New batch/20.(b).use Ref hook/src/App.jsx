import { useState,useRef, useEffect } from "react";
const App = () => {
  const [name,setName]=useState("")
  const myRef=useRef(0);
  useEffect(()=>{
    myRef.current+=1
  })
  return (
    <>
    Enter Name :  <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
   
      <h1>Rendering COunt :{myRef.current}</h1>
      
    </>
  );
};

export default App;
