const app=()=>{
 
  const MyName=(nm)=>{
    alert("My Name : "+nm);
  }

  const Detail=(fnm,snm)=>{
    alert(`My Name is ${fnm} I Am From ${snm}`)
  }
  return(
    <>
    <h1>Welcome to React Event</h1>
    <button onClick={()=>{MyName("Ajay Chandravanshi")}}>Click Here</button>
    <button onClick={()=>{Detail("Ajay Chandravanshi","Bhopal")}}> Click Me</button>
    </>
  )
}
export default app