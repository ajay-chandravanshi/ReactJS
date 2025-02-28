 import { useState,useEffect } from "react";
 import axios from "axios";
 import editimg from "../images/edit.png"
 import delimg from "../images/del.png"
 import { Navigate, useNavigate } from "react-router-dom";


 const Update=()=>{
    const [myData,setMydata]=useState([]);

    const Navigate=useNavigate();

    const loadData=async()=>{
        let api="http://localhost:3000/student";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    
    }
    useEffect(()=>{
        loadData();
    },[])

    const myDel=async(id)=>{
        let api=`http://localhost:3000/student/${id}`
        const response=await axios.delete(api);
        alert("Record Deleted!!")
        loadData();
    }

    const myEdit=(id)=>{
        Navigate(`/editdata/${id}`);
    }

    const ans=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td>
                    <a href="#">
                    <img src={delimg} width="30" height="30" onClick={()=>{myDel(key.id)}} />
                    </a>
                </td>
                <td>
                    <a href="#" onClick={()=>{myEdit(key.id)}}>
                    <img src={editimg} width="30" height="30" />
                    </a>
                </td>
            </tr>
            </>
        )
    })


    return(
        <>
        <h1>Update Data</h1>
        <table width="400" border="1" bgcolor="aqua">
        <tr>
            <th>Empno</th>
            <th>Name</th>
            <th>designation</th>
            <th>Salary</th>
            <th></th>
            <th></th>
        </tr>
        {ans}
        </table>
        </>
    )
 }
 export default Update