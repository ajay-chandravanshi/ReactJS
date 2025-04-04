
const App = () => {
  const display=(e)=>{
    alert(" Type: " + e.type + " Name: " + e.target.name + " Value: "+ e.target.value)
  }


  return (
    <>
    <h1>Welcome</h1>
    <button name="btn1" value="myBtn" onClick={display}>Click Here</button>
    </>
  );
};
export default App;
