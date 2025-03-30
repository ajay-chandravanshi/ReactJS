import { useSelector ,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";
const App = () => {
  const myval=useSelector(state=>state.mycounter.count);
  const dispatch =useDispatch();
  return(
<>
<h1>Welcome to Counter Program</h1>

<button onClick={()=>{dispatch(increment())}} >Increament</button>
<h1>{myval}</h1>
<button onClick={()=>{dispatch(decrement())}} >decreament</button>
</>
  );
};
export default App;
