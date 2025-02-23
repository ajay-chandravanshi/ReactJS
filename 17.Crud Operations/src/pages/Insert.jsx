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
                Enter empno : <input type="text" name="empno" onChange={handleInput} />
                <br /><br />
                Enter name : <input type="text" name="name" onChange={handleInput} />
                <br /><br />
                Enter designation : <input type="text" name="designation" onChange={handleInput} />
                <br /><br />
                Enter salary : <input type="text" name="salary" onChange={handleInput} />
                <br /><br />
                <button onClick={SubmitForm}>Click</button>
            </center>
        </>
    );
};

export default Insert;


















// import { useState } from "react";
// import axios from "axios";

// const Insert=()=>{
//     const [input,setInput]=useState({});

//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values,[name]:value})); 
//         console.log(input);
//     }

//     const handleSubmit=async()=>{
//         let api="http://localhost:3000/student";
//         const response=await axios.post(api,input)
//         console.log(response)
//         alert("Data saved!")
//     }
//     return(
//         <>
//         <h1>Insert Page</h1>
//         Enter empno:<input type="text" name="empno" onClick={handleInput}/>
//         <br />
//         Enter name:<input type="text"  name="name" onClick={handleInput}/>
//         <br />
//         Enter desigination:<input type="text" name="designation" onClick={handleInput} />
//         <br />
//         Enter salary:<input type="text" name="salary" onClick={handleInput}/>
//         <br />
//         <button onClick={handleSubmit}>Save</button>
//         </>
//     )
// }
// export default Insert;