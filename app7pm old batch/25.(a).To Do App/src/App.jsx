import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addTask } from "./todoSlice"

const App =()=>{
  const[txtval,setTxtVal]=useState("");
  const dispach=useDispatch();
  const mytask=useSelector(state=>state.mytodo.task)
  let sno=0;
  const ans=mytask.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.work}</td>
      </tr>
      </>
    )
  })
  return(
    <>
    <div className="first_div">
      
    <h1>Welcome to My TO-DO App</h1>
    <hr />
    <h3>Enter Your Task :</h3> <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}} placeholder="Add a new task" />

    <button onClick={()=>{dispach(addTask({work:txtval}))}} > Add</button>
    <hr />
    <table border="2px black">
      <tr>
        <th>Sno</th>
        <th id="task">My Task</th>
      </tr>
      {ans}
    </table>
    
    </div>
    </>
  )
}
export default App