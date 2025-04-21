import { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("white");
  const [text, setText] = useState("Initial Text");
  const [border, setBorder] = useState("none");

  const handleBgChange = () => setBgColor("yellow");
  const handleTextChange = () => setText("Text Changed!");
  const handleBorderChange = () => setBorder("2px solid black");

  return (
    <>
      <h1>Welcome</h1>
      <div
        style={{
          backgroundColor: bgColor,
          border:"2px solid black",
          borderRadius:"50%",
          padding: "20px",
          marginBottom: "10px",
          width:"200px"
        }}
      >
        <h2>{text}</h2>
        
      </div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Rendering"
      />
      <br /><br />
      <button onClick={handleBgChange}>Change Background</button>
      <button onClick={handleTextChange}>Change Text</button>
      <button onClick={handleBorderChange}>Add Border</button>
    </>
  );
};

export default App;