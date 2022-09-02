import React from "react";

function SpecialButton({ children }) {
  const specialFunction = () => {
    alert("you clicked the special button");
  };
  return <button onClick={specialFunction}>{children}</button>;
}

export default SpecialButton;
