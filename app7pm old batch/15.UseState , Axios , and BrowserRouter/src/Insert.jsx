import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input,setInput]=useState({})

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);

    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/student";
        axios.post(api,input).then((res)=>{
            alert("data save succesfully");
        })
    }

    return(
        <>
        <h1>Insert Data</h1>
        Enter Rollno : <input type="text" name="rollno"  onClick={handleInput}/>
        <br />
        Enter Name : <input type="text" name="name"  onClick={handleInput}/>
        <br />
        Enter City : <input type="text" name="city"  onClick={handleInput}/>
        <br />
        Enter Fees : <input type="text" name="fees"  onClick={handleInput}/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Insert