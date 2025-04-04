
const App = () => {
//   const display=()=>{
//     alert("button clicked")
//   }

const Myname=(nm)=>{
  alert(`My name is ${nm}`);
}

  return (
    <>
    <h1>Welcome</h1>
    {/* <button onClick={display}>Click Here</button>  */}
    <button onClick={()=>{Myname("Ajay")}}>Click Here</button>
    </>
  );
};
export default App;
