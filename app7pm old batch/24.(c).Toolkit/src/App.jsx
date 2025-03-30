import { useSelector ,useDispatch } from "react-redux";
import {changeColor} from "./ColorSlice";
const App = () => {
  const myclr=useSelector(state=>state.mycolor.color);
  const dispatch =useDispatch();
  return(
<>
<h1>Welcome to Color Program</h1>

<button onClick={()=>{dispatch(changeColor())}} >Change Color</button>
<div style={{width:"300px",height:"300px",backgroundColor:myclr}} >

</div>
</>
  );
};
export default App;