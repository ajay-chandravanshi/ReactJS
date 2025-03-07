import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";
const App=()=>{
  const ans=EmpData.map((key)=> <EmpDesign 
eno={key.EmpId}
nm={key.Name}
ct={key.Post}
sal={key.Salary} /> );
  return(
   
    <>
    <h1>Welcome to Bhopal</h1>
    <table>
<tr>
  <td>EmpId</td>
  <td>Name</td>
  <td>Post</td>
  <td>Salary</td>
</tr>
{ans}
    </table>
    </>
  )
}
export default App;