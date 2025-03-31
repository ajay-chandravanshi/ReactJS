import Data from "./Data";

const collage="Patel College Bhopal"
const seats=2000
const fees=30000
const App=()=>{
    return(
        <>
       <Data nm={collage} seat={seats} fs={fees} />
        </>
    )
}
export default App;