import { useEffect,useState } from "react";
const App = () => {
const [count,setCount]=useState(0)

useEffect(()=>{
  setTimeout(()=>{
    setCount(count+1)
  },4000)

})

  return (
    <>
    <h1>This is Count</h1>
    <h1>Welcome to my app {count}</h1>
    </>
  );
};
export default App;
