import { useState,useEffect } from "react";
import axios from "axios";

const Display = ()=>{
  const [mydata,setMydata]=useState([]);

  const loadData=async()=>{
    let api="http://localhost:3000/student";
    const response=await axios.get(api);
    console.log(response.data)
    setMydata(response.data)
  }
  useEffect(()=>{
    loadData();
  },[]);


  const ans=mydata.map((key)=>{
    return(
      <>
       <tr>
      <td>{key.id}</td>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
    </>
    )
   })


    return(
        <>
          <h1>This is the display page</h1>
          <table width="500"  height="400" bgcolor="aqua" border="2px">
            <tr>
              <th>Id</th>
              <th>Rollno</th>
              <th>Name</th>
              <th>City</th>
              <th>Fees</th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Display;