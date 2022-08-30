import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Listitem from "./components/Listitem";
import { urlAlphabet } from "nanoid";

function App() {
  const list = [
    { name: "Potion", id: "1" },
    { name: "Pokeball", id: "2" },
    { name: "Para Healer", id: "3" },
    { name: "Superball", id: "4" },
    { name: "Masterball", id: "5" },
  ];

  const [shoppingList, setShoppingList] = useState(list);

  /*This is a template*/
  function addListItem(listItem) {
    setShoppingList([listItem, ...shoppingList]);
  }

  //const listLength = shoppingList.length;

  // This is the template.
  function removeListItem(listItem) {
    setShoppingList(shoppingList.filter((item) => item.id !== listItem.id));
  }

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"></img>
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
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
