const app=()=>{

const getValue=(e)=>{
let name=e.target.name
let value=e.target.value
alert(`Name=${name}  Value=${value}`)
  }
return(
  <>
  <h1>Welcome to my website</h1>
  <button name="mybtn" value="btn0"  onClick={getValue}>Click Here</button>
  </>
)
}
export default app