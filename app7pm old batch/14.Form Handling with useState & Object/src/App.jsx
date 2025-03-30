import { useState } from "react";

const App = () => {

  const[input,setInput]=useState({});

  const handleSubmit=()=>{
    console.log(input)
  }

  const handalInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }
  return (
    <>
      <h1>Application Form</h1>
      Enter rollno:<input type="text" name="rollno." onChange={handalInput}/>
      <br />
      Enter name:<input type="text"  name="name" onChange={handalInput}/>
      <br />
      Enter city:<input type="text"  name="city" onChange={handalInput}/>
      <br />
      Enter fees:<input type="text"  name="fees" onChange={handalInput}/>
      <br />
      <button onClick={handleSubmit}>Click Here</button>
    </>
  );
};
export default App;