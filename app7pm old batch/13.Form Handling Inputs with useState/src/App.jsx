import { useState } from "react";

const App = () => {

  const[name,setName]=useState("");
  const[city,setCity]=useState("");
  const[Empno,setEmpno]=useState("");
  const[Salary,setSalary]=useState("");

  const handleSubmit=()=>{
    console.log({Empno:Empno,name:name,city:city,salary:Salary})
  }
  return (
    <>
      <h1>Application Form</h1>
      Enter Empno:<input type="text"  value={Empno} onChange={(e)=>{setEmpno(e.target.value)}}/>
      <br />
      Enter name:<input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      Enter city:<input type="text"  value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      <br />
      Enter Salary:<input type="text"  value={Salary} onChange={(e)=>{setSalary(e.target.value)}}/>
      <br />
      <button onClick={handleSubmit}>Click Here</button>
    </>
  );
};
export default App;
