import { useState } from "react";


const Search=()=>{
    const [empno,setEmpno]=useState("");

    const handleSubmit=()=>{
        let api=`http://localhost:3000/student/?empno=${empno}`;
        const response=await axios.get(api)
        setMydata(response.data)
    }

    const ans=()=>{
        return(
            <>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            
            </>
        )
    }
    return(
        <>
        <h1>Search Page</h1>
        Enter Empno : <input type="text" value={empno} onClick={(e)=>{setEmpno(e.target.value)}}/>
        </>
    )
}
export default Search;