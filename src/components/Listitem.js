import { useState } from "react";
import "./Listitem.css";

export default function Listitem({ item, onRemoveListItem }) {
  function handleClick() {
    onRemoveListItem(item);
  }

  const [isDone, setIsDone] = useState(false);

  function handleChange() {
    setIsDone(!isDone);
  }

  return (
    <li className={`${isDone ? "done" : "undone"}`}>
      <input onChange={handleChange} type="checkbox" />
      {item.name}
      <button onClick={handleClick}>X</button>
    </li>
  );
}
