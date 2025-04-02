
const App = () => {
    const name=[
        {
            "rollno":123,
            "name":"Ajay",
            "city":"Bhopal",
            "fees":25000
        },
        {
            "rollno":124,
            "name":"Animesh",
            "city":"Sehore",
            "fees":30000
        },
        {
            "rollno":125,
            "name":"Ayush",
            "city":"Agra",
            "fees":35000
        },
        {
            "rollno":126,
            "name":"Aniket",
            "city":"Bina",
            "fees":40000
        }
    ]

    const ans=name.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            
            </>
        )
    })
  return (
   
    <>
    <table border="1">
        <tr>
            <td>Roll No</td>
            <td>Name</td>
            <td>City</td>
            <td>Fees</td>
        </tr>
        {ans}
    </table>
    </>
  )
}

export default App
