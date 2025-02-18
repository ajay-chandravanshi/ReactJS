const app=()=>{
 
const Myfunction=(e)=>{
  // alert("Function Calling........")
  alert("Event Name="+e.type)
}

  const MyName=(nm)=>{
    alert("My Name : "+nm);
  }

  const Detail=(fnm,snm)=>{
    alert(`My Name is ${fnm} I Am From ${snm}`)
  }

  const myBhopal=(nm,e)=>{
    alert(`name =${nm} and Event Name=${e.type}`)
  }
  
  return(
    <>
    <h1>Welcome to React Event</h1>
    
    <button name="mybtn" value="btn0" onClick={Myfunction}>Press Here</button>

    <button onClick={()=>{MyName("Ajay Chandravanshi")}}>Click Here</button>

    <button onClick={()=>{Detail("Ajay Chandravanshi","Bhopal")}}> Click Me</button>

    <button name="mybtn" value="btn0" onClick={(e)=>myBhopal("Ajay",e)}>Click!</button>

    </>
  )
}
export default app