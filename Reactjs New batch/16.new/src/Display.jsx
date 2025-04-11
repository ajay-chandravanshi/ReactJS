
const Display = () => {
   const ans = myData.map((key) => {
    <tr>
    <td>{key.rollno}</td>
    <td>{key.name}</td>
    <td>{key.city}</td>
    <td>{key.fees}</td>
  </tr>
   })
  }  

export default Display
