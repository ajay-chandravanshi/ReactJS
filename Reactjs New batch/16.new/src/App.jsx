import { useState } from "react";

const App = () => {

  const[input,setInput]=useState({});

  const handleSubmit=async()=>{
    let api="http://localhost:3000/student"
    const response=await axios.post(api,input)
    alert("data Successfully Save!!!")

  }

  const handalInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }
  return (
    <>
      
      <button onClick={handleSubmit}>Submit!!</button>
    </>
  );
};
export default App;