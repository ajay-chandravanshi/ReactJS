

const app=()=>{

  const Myfunction=()=>{
   alert("Function Calling..........")
  }
  const Myname=(fnm,snm)=>{
    alert(`My Name is ${fnm} I AM From ${snm}` )
  }

  const myBhopal=(nm,e)=>{
    alert("name : " + nm + " Event Name: "+e.type)
  }
  
  return(
    <>
    <h1>Hello sir this is my website</h1>
    <button name="mybtn" value="btn0" onClick={Myfunction}>Click Here</button>
    <button onClick={()=>{Myname("Ajay Chandravanshi","Bhopal")}}>Click Me</button>
    <button name="mybtn" value="btn0" onClick={(e)=>myBhopal("Ajay",e)}>Click!</button>

    </>
  )
}
export default app