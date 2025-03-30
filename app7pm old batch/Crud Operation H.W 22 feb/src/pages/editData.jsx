import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const EditData = () => {
    const { id } = useParams();
    const [empData, setempData] = useState({});

    const loadData = async () => {
        let api = `http://localhost:3000/student/${id}`;
        const response = await axios.get(api);
        console.log(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setempData((values) => ({ ...values, [name]: value }));
        console.log(empData);
      };


      const handleSubmit = async () => {
        let api = `http://localhost:3000/student/${id}`;
        const response = await axios.put(api, empData);
        alert("Record Updated!!");
      };


    return (
        <>
            <h1>Edit Employee Detail:{id}</h1>
            Enter empno : <input type="text" name="empno" value={empData.empno} onChange={handleInput} />
            <br />
            Enter name  : <input type="text" name="name" value={empData.name} onChange={handleInput} />
            <br />
            Enter designation : <input type="text" name="designation" value={empData.designation} onChange={handleInput} />
            <br />
            Enter salary : <input type="text" name="salary" value={empData.salary} onChange={handleInput} />
            <br />
            <button onClick={handleSubmit}>Save</button>
        </>
    )
}
export default EditData;