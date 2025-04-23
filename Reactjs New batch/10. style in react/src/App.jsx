import React from "react";

const Styling = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "400px",
        height: "200px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px solid black",
      }}
    >
      <div
        style={{
          backgroundColor: "skyblue",
          width: "250px",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid darkblue",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: "120px",
            height: "60px",
            borderRadius: "50%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            border: "2px solid white",
          }}
        >
          CYBEROM
        </div>
      </div>
    </div>
  );
};

export default Styling;
