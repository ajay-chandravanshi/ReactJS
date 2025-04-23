import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const EmployeeInput = () => {
  const [input, setInput] = useState({
    emp_id: "",
    name: "",
    designation: "",
    department: "",
    basic_salary: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:3000/employees";
    await axios.post(api, input);
    alert("Employee added successfully!");
    setInput({
      emp_id: "",
      name: "",
      designation: "",
      department: "",
      basic_salary: ""
    });
  };

  return (
    <div id="myform" style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Insert Employee</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            name="emp_id"
            value={input.emp_id}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={input.designation}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            value={input.department}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Basic Salary</Form.Label>
          <Form.Control
            type="number"
            name="basic_salary"
            value={input.basic_salary}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeInput;
