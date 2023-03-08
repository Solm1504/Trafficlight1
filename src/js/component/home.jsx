import React, { useState } from "react";

function Semáforo() {
  const colors = ["red", "yellow", "green"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: colors[currentColorIndex],
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          margin: "10px"
        }}
      ></div>
      <button onClick={handleClick}>Cambiar</button>
    </div>
  );
}

export default Semáforo;
