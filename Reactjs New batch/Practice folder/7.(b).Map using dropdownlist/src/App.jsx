
const App=()=>{
    const name=["Reactjs","Oracle","Java","Mern"]
    const ans=name.map((key)=>{
        return(
            <option>
                {key}
            </option>
        )
    })
    return(
        <>
       <h1>Hello Sir</h1>
       <select>
        {ans}
       </select>
        </>
    )
}
export default App;