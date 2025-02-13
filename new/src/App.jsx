import myimg1 from "./images/image1.jpeg";
import myimg2 from "./images/image2.jpeg";
import myimg3 from "./images/image3.jpeg";
const App=()=>{
  return(
   
    <>
    <div className="div1">
   <img src={myimg1} />
   <img src={myimg2} />
   <img src={myimg3} />
   </div>
   <br />
   <br />
   <div>
    <img src="public/images/image1.jpeg" />
    <img src="public/images/image2.jpeg" />
    <img src="public/images/image3.jpeg" />
   </div>
    </>
  )
}
export default App;