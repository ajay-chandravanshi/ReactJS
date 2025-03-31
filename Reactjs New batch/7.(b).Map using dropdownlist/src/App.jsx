
const App=()=>{
const Subject=["Oracle","Reactjs","Java","Python"]
const ans=Subject.map((key)=>{
  return(
    <>
    <option>{key}</option>
    </>
  )
})


  return(
      <>
      <h1>Hello sir</h1>
      <select>
        {ans}
      </select>
      </>
  )
}
export default App;                                       