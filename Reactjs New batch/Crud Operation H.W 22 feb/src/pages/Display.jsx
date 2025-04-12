import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=async()=>{
    let api="http://localhost:3000/student";
    const response=await axios.get(api);
    console.log(response);
    setMydata(response.data);
  }
  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
      </tr>
      </>
    )
  })

  useEffect(()=>{
    loadData();
  },[]);
  return(
    <>
    <h1>Display Page</h1>
    <table className="tablebody" width="500" height="400" bgcolor="aqua" border="2px">
     <tr className="tabletr">
      <th className="tableth">Empno</th>
      <th className="tableth">Name</th>
      <th className="tableth">Designation</th>
      <th className="tableth">Salary</th>
     </tr>
     {ans}
    </table>
    
    </>
  )
}
export default Display;