import { useReducer } from "react"

const App = () => {
  const reducerMethod=(state,action)=>{
    switch(action)
    {
      case "Increment":
        return state+1;
      case "Decrement":
        return state-1;
      case "Increment":
        return state;  
    }
  }
  const [count,dispatch]=useReducer(reducerMethod,0);
  return (
   <>
   <h1>Welcome To React js</h1>
   <button onClick={()=>{dispatch("Increment")}} >Increament</button>
   <h1>Count : {count}</h1>
   <button onClick={()=>{dispatch("Decrement")}} >Decreament</button>
   
   
   </>
  )
}

export default App
