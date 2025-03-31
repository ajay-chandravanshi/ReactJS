import Data from "./Data";

const COllege={
    name:"patel collage",
    city:"Bhopal",
    Fees:25000,
    subject:"ReactJs"
}


const App=()=>{
    return(
        <>
        <Data nm={COllege.name} ct={COllege.city} fs={COllege.Fees} sub={COllege.subject}/>
        </>
    )
}
export default App;