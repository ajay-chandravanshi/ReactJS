import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then((response) => {
        console.log(response.data); // Check this in browser console (press F12)
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Basic Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.emp_id}>
              <td>{emp.emp_id}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>{emp.department}</td>
              <td>{emp.basic_salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeData;
