import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const [empno, setEmpno]= useState("");
    const [mydata, setMydata] = useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/employee/?empno=${empno}`;
        const response  = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    const ans=mydata.map((key)=>{
        return(
            <>
                <h1> Welcome  {key.name}</h1>
                <h2> Your Company Emp no {key.empno}</h2>
                <h2> Your Designation : {key.designation}</h2>
                <h3> Your CTC : {key.salary}</h3>
            </>
        )
    })
    return(
        <>
         <h1> Search Page</h1>
         Enter Employee No : <input type="text" value={empno}
         onChange={(e)=>{setEmpno(e.target.value)}} />
         <button onClick={handleSubmit}>Search</button>
         <hr />

         <div id="searchData">
            {ans}

         </div>
        </>
    )
}

export default Search;