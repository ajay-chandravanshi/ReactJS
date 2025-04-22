import { useReducer } from "react";

const App = () => {
  const myReducer = (state, action) => {
    switch (action.type) {
      case "GREEN":
        return "green";
      case "BLUE":
        return "blue";
      case "RED":
        return "red";
      default:
        return state;
    }
  };

  const [color, dispatch] = useReducer(myReducer, "yellow");

  return (
    <>
      <h1>Welcome To React js</h1>
      <button onClick={() => dispatch({ type: "RED" })}>RED</button>
      <button onClick={() => dispatch({ type: "GREEN" })}>Green</button>
      <button onClick={() => dispatch({ type: "BLUE" })}>BLUE</button>
      <div style={{ width: "200px", height: "400px", backgroundColor: color }}></div>
    </>
  );
};

export default App;
