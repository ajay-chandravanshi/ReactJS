const Student=[
  {
    "rollno":123,
    "name":"Ajay",
    "city":"Bhopal",
    "fees":15000
  },
  {
    "rollno":124,
    "name":"Animesh",
    "city":"Satna",
    "fees":10000
  },
  {
    "rollno":125,
    "name":"Akash",
    "city":"Agra",
    "fees":12000
  },
  {
    "rollno":125,
    "name":"Akansha",
    "city":"Sehore",
    "fees":20000
  },
]

const ans=Student.map((key)=>{
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
});


const App=()=>{
  return(
      <>
      <h1>Welcome to React Class</h1>
     <table border="2px">
      <tr>
      <th>Roll No</th>
      <th>Name</th>
      <th>City</th>
      <th>Fees</th>
      </tr>
      {ans}
     </table>
      </>
  )
}
export default App;                                       