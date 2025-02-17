const app=()=>{
  const Display=()=>{
    alert("This My Function")
  }
  return(
    <>
    <h1>Welcome to React Event</h1>
    <button onClick={Display}>Click Here</button>
    </>
  )
}
export default app