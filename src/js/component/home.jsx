import React, { useState } from "react";

function Semáforo() {
  const colors = ["red", "yellow", "green"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentColorIndex(index);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: colors[0],
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          margin: "10px",
          opacity: currentColorIndex === 0 ? 1 : 0.3
        }}
        onClick={() => handleClick(0)}
      ></div>
      <div
        style={{
          backgroundColor: colors[1],
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          margin: "10px",
          opacity: currentColorIndex === 1 ? 1 : 0.3
        }}
        onClick={() => handleClick(1)}
      ></div>
      <div
        style={{
          backgroundColor: colors[2],
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          margin: "10px",
          opacity: currentColorIndex === 2 ? 1 : 0.3
        }}
        onClick={() => handleClick(2)}
      ></div>
    </div>
  );
}

export default Semáforo;
