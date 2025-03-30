import Cybrom from "./Cybrom";


const Collage={
  name:"Patel Collage",
  fees:55600,
  city:"Bhopal",
  Subject:"Reactjs"
}


const App=()=>{
  return(
     <>
     <Cybrom  nm={Collage.name}  fs={Collage.fees} ct={Collage.city} sub={Collage.Subject} />
     </>
  )
}
export default App;                                       