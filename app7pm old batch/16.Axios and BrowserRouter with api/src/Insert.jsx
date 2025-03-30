import axios from "axios";
import { useState } from "react";

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));

        console.log(input)
    };

    const SubmitForm = () => {
        console.log("Form Data:", input);
        let api = "http://localhost:3000/student";
        axios.post(api , input).then((res)=>{
             alert("Data Save Succesfully")
        })
    };

    return (
        <>
            <center>
                <h1>Applcation</h1>
                Enter Name : <input type="text" name="name" onChange={handleInput} />
                <br /><br />
                Enter Roll : <input type="text" name="roll" onChange={handleInput} />
                <br /><br />
                Enter City : <input type="text" name="city" onChange={handleInput} />
                <br /><br />
                Enter Fees : <input type="text" name="fees" onChange={handleInput} />
                <br /><br />
                <button onClick={SubmitForm}>Click</button>
            </center>
        </>
    );
};

export default Insert;