import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Insert=()=>{
    const [input, setInput] = useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=async(e)=>{
          e.preventDefault();
          let api="http://localhost:3000/employee";
          const response = await axios.post(api, input);
          toast.success("Data successfully save!!!");
          setInput({
            empno:"",
            name:"",
            designation:"",
            salary:""
          })
    }
    return(
        <>
         <div id="myform">
         <h1> Insert Page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee No </Form.Label>
        <Form.Control type="text" name="empno" value={input.empno} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name </Form.Label>
        <Form.Control type="text"  name="name" value={input.name} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation </Form.Label>
        <Form.Control type="text"  name="designation" value={input.designation} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text"  name="salary" value={input.salary} onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>


    <ToastContainer />
        </>
    )
}

export default Insert;