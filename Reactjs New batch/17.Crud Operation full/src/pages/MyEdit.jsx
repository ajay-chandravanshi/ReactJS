import axios from "axios";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const MyEdit=()=>{
    const {id} = useParams();
    const [mydata, setMydata]= useState({});
    const loadData=async()=>{
         let api=`http://localhost:3000/employee/${id}`;
         const response = await axios.get(api);
         console.log(response.data);
         setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    }, []);

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}));
    console.log(mydata);
  }

  const handleSubmit=async()=>{
    let api=`http://localhost:3000/employee/${id}`;
    const response= await axios.put(api, mydata);
    toast.info("Data succesfully Uodated!!!", {
        position: "bottom-right"
      });

  }

    return(
        <>
          <h1> Edit Employee Data : </h1>
          Edit Emp No <input type="text" name="empno" value={mydata.empno}
           onChange={handleInput}  />
          <br />
          Edit Emp Name <input type="text" name="name" value={mydata.name} 
          onChange={handleInput} />
          <br />
          Edit Designation <input type="text" name="designation" value={mydata.designation} 
           onChange={handleInput}/>
          <br />
          Edit Salary <input type="text" name="salary" value={mydata.salary}
           onChange={handleInput} />
          <br />
          <button onClick={handleSubmit}> Edit Save!</button>

          <ToastContainer />
        </>
    )
}

export default MyEdit