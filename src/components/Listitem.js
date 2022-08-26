export default function Listitem({ item, onRemoveListItem }) {

  function handleClick() {
    onRemoveListItem(item);
  }

  return (
    <li>
      <input type="checkbox" />
      {item.name}
      <button onClick={handleClick}>X</button>
    </li>
  )
}