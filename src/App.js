import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Listitem from "./components/Listitem";
import { renderIntoDocument } from "react-dom/test-utils";
import { urlAlphabet } from "nanoid";

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

  //const listLength = shoppingList.length;

  // This is the template.
  function removeListItem(id) {
    console.log(id);
    setShoppingList(shoppingList.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" alt=""></img>
      <h1>Shopping List</h1>
      <Form onAddListItem={addListItem} />
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
              isDone={listItem.isDone}
              id={listItem.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
