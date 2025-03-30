
const App=()=>{

const handleInput=(e)=>{
 let name=e.target.name;
 let value=e.target.value;
 console.log({[name]:value})
}
 
  return(
    <>
   <h1>Welcome to React Event</h1>
  Enter City : <input type="text" name="mycity" value="Bhopal"
  onChange={handleInput} />
    </>
  )
}
export default App;