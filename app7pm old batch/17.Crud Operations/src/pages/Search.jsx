import axios from "axios";
import { useState } from "react";
const Search = () => {
  const [empno, setEmpno] = useState("");
  const [mydata, setMydata] = useState([]);

  const handleSubmit = async () => {
    let api = `http://localhost:3000/student/?empno=${empno}`;
    const respone = await axios.get(api);
    setMydata(respone.data);
  }
  const ans = mydata.map((key) => {
    return (
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
  return (
    <>
      <h1>Search Page</h1>
      Enter Empno :{" "}
      <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}}/>
      <button onClick={handleSubmit}>Search</button>
      <hr />
      <table className="tablebody"  bgcolor="aqua" border="2px">
        <tr>
          <th>Empno</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default Search;