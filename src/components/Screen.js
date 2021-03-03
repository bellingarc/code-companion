import React, { useEffect, useHistory, useState } from "react";
import Button from "./Button";
import "./Screen.css";
function Screen() {
  const [numBinds, setNumBinds] = useState(12);
  let buttons = [];
  for (let i = 1; i <= numBinds; i++) {
    buttons[i - 1] = i;
  }
  return (<div className="grid-container">
     {buttons.map(num => <Button className="grid-item" id={num} order={num}>Howdy {num}</Button>)}
  </div>)
}

export default Screen;
