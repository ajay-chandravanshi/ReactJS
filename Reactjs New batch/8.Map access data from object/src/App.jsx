import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const App=()=>{

  const ans=EmpData.map((key)=> <EmpDesign 
  emno={key.empno}
  nm={key.name}
  pt={key.post}
  sal={key.salary}
  />);


  return(
      <>
    <table border="1">
      <tr>
        <th>Emp No</th>
        <th>Name</th>
        <th>Post</th>
        <th>Salary</th>
      </tr>
      {ans}
    </table>
      </>
  )
}
export default App;                                       