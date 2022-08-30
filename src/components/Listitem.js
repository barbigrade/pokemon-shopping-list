import "./Listitem.css";

export default function Listitem({ id, item, onRemoveListItem, isDone, onToggleItem }) {
  return (
    <li className={`${isDone ? "done" : "undone"}`}>
      <input
        onChange={() => onToggleItem(id)}
        type="checkbox"
        checked={isDone} />
      {item.name}
      <button className="deletebutton" onClick={() => onRemoveListItem(id)}>X</button>
    </li>
  );
}
