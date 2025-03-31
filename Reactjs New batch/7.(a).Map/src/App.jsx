
const App=()=>{

 const Student=["Ranu","Shanu","Manju","Sanju","Riya"]

  const ans=Student.map((key)=>{
    return(
      <>
      <h1>{key}</h1>
      </>
    )
  });

  return(
      <>
      <h1>Hello sir</h1>
      {ans}
      </>
  )
}
export default App;                                       