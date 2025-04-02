
const App=()=>{
    const name=["hindi","English","Java","Python"]
    const ans=name.map((key)=>{
          return(
            <>
            <h1><ul><li>{key}</li></ul></h1>
            </>
          )

    })
    return(
        <>
        
        {ans}
        
       
        </>
    )
}
export default App;