import { useRef } from "react";
const App = () => {
  const myRef=useRef("");
  const myDisplay=()=>{
      myRef.current.innerHTML="We lear useRef Hook in React";

  }
  return (
    <>
      <h1 ref={myRef}>Welcome to Cybrom!!</h1>
      <button onClick={myDisplay} >Click here</button>
    </>
  );
};

export default App;
