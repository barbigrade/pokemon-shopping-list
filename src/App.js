import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Listitem from "./components/Listitem";
import { renderIntoDocument } from "react-dom/test-utils";

function App() {
  const list = [
    { name: "Potion", id: "1", isDone: true },
    { name: "Pokeball", id: "2", isDone: false },
    { name: "Para Healer", id: "3", isDone: false },
    { name: "Superball", id: "4", isDone: false },
    { name: "Masterball", id: "5", isDone: false },
  ];

  const [shoppingList, setShoppingList] = useState(loadFromLocal() || list);
  useEffect(() => {
    localStorage.setItem('_items', JSON.stringify(shoppingList));
  }, [shoppingList]);

  function loadFromLocal() {
    return JSON.parse(localStorage.getItem('_items'));
  }

  function toggleItem(shoppingId) {
    const updatedItems = shoppingList.map((item) => {
      if (item.id === shoppingId) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShoppingList(updatedItems);
  }

  /*This is a template*/
  function addListItem(listItem) {
    setShoppingList([listItem, ...shoppingList]);
  }

  const listLength = shoppingList.length;

  // This is the template.
  function removeListItem(listItem) {
    setShoppingList(shoppingList.filter((item) => item.id !== listItem.id));
  }

  return (
    <div className="App">
      <h1>Pokemon Shopping List</h1>
      <Form onAddListItem={addListItem} length={listLength} />
      {/* On add list item is the prop name that leads back to the addlistitem
      function*/}
      <ul>
        {shoppingList.map((listItem) => {
          return (
            <Listitem
              key={listItem.id}
              item={listItem}
              onRemoveListItem={removeListItem}
              onToggleItem={toggleItem}
              isChecked={listItem.isDone}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
