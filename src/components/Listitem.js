import { useState } from "react";
import "./Listitem.css";

export default function Listitem({ id, item, onRemoveListItem, isDone, onToggleItem }) {
  // function handleClick() {
  //   onRemoveListItem(item);
  // }

  // function handleChange() {
  //   setIsDone(!isDone);
  // }

  return (
    <li className={`${isDone ? "done" : "undone"}`}>
      <input
        onChange={() => onToggleItem(id)}
        type="checkbox"
        done={isDone} />
      {item.name}
      <button onClick={() => onRemoveListItem(id)}>X</button>
    </li>
  );
}
