import { useState } from "react";
const App = () => {
const [name,setName]=useState("")
const [city,setCity]=useState("")

const HandleSubmit=()=>{
     alert(`My Name is ${name} and city is ${city}`)

}
  return (
    <>
   <h1>Application Form</h1>
   name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
   <br />
   City : <input type="text" value={city}  onChange={(e)=>{setCity(e.target.value)}}/>
   <br />
   <button onClick={HandleSubmit} >Save!!</button>
    </>
  );
};
export default App;
