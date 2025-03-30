import { useSelector ,useDispatch } from "react-redux";
import {changeColor} from "./ColorSlice";
import { useState } from "react";
const App = () => {
  const [val,setVal]=useState("")
  const myclr=useSelector(state=>state.mycolor.color);
  const dispatch =useDispatch();
  return(
<>
<h1>Welcome to Color Program</h1>

Enter color : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} /> 
<button onClick={()=>{dispatch(changeColor(val))}} >Change Color</button>
<hr />
<div style={{width:"300px",height:"300px",backgroundColor:myclr}} >

</div>
</>
  );
};
export default App;