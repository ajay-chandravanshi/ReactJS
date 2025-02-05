// const name='ajay'
// const age=21

// const sub=<ul>

//   <li>PHP</li>
//   <li>Java</li>
//   <li>Python</li>
//   <li>C++</li>
// </ul>
const App=()=>{
  return(
    // ak varible mai bahut si chij likh sakte hai 
    // <p>My Subject:{sub}</p>

    // expresion likh sakte hai 
    // <h1>Welcome To Bhopal my name is {name} my age :{age*21+100}</h1>

    // fragment tag use because of not create extra node in memory or not use extra memory
    // <>
    // <h1>Welcome to cybrom</h1>
    // <h1>We learn python</h1>
    // </>

    // single element close karna padega nahi toh error ayyegi SyntaxError(<br />)
    // <>
    // Welcome to Cybrom Bhopal <br /> We learn JS
    // <h1>Application Form</h1>
    // Enter Name: <input type="text"  />
    // <br />
    // Enter City: <input type="text"  />
    // </>

    // tag mai class dete time Syntax(className) likhna padega normal class nahi likh sakte
    <>
    <h1 className="data" id="mydata">We learn Java Script</h1>
    </>
  )
}
export default App;