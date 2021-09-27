import React, { useState } from "react";






function Toggle() {  
  const [isOff, setOffness] = useState (false);

  function handleClick() {
  setOffness((isOff) => !isOff);
}



  return <button onClick={handleClick}>{isOff ? "ON" : "OFF"}</button>;
}

export default Toggle;
