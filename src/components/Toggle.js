import React, { useState } from "react";




function handleClick() {
  setOffness(!isOff? isOff=true : isOff=false)
}


function Toggle() {
  
  const [isOff, setOffness] = useState (false)

  return <button onClick={handleClick}>{isOff}</button>;
}

export default Toggle;
