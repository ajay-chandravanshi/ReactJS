import EmpData from "./EmpData"
import EmpDesign from "./EmpDesign"

const App = () => {

const ans=EmpData.map((key)=><EmpDesign 

emno={key.empno}
nm={key.name}
ps={key.post}
sal={key.salary}

/>)
  return (
    <>
    <table border="1">
      <tr>
        <td>EMP No</td>
        <td>Name</td>
        <td>post</td>
        <td>Salary</td>
      </tr>
      {ans}
    </table>
    </>
  )
}

export default App
