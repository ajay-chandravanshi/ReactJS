import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { MdEditSquare } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata, setMydata]= useState([]);
    const navigate= useNavigate();
    const laodData=async()=>{
        let api="http://localhost:3000/employee";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        laodData();
    }, []);


 const myDel=async(id)=>{
    let api=`http://localhost:3000/employee/${id}`;
    const response = await axios.delete(api);
    toast.warning("Data succesfully Deleted!!!")
    laodData();
    
 }


 const myEdit=(id)=>{
  navigate(`/myedit/${id}`)
 }

    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                <td> {sno} </td>
                <td> {key.empno} </td>
                <td> {key.name} </td>
                <td> {key.designation} </td>
                <td> {key.salary} </td>
                <td>

                <MdDelete className="DelIcon" 
                onClick={()=>{myDel(key.id)}} />
                </td>
                <td>
                <MdEditSquare className="editIcon"
                onClick={()=>{myEdit(key.id)}} />
                </td>
              </tr>
            </>
        )
    });
    return(
        <>
         <h1> Update Page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Emp no</th>
          <th>Emp name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    {ans}
      </tbody>
      </Table>
      <ToastContainer />
              </>
    )
}
export default Update;