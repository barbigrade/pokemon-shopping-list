import "./App.css";
import { useState } from "react";
import Form from './components/Form'

function App() {
  const list = [
    { name: "Potion", id: "1" },
    { name: "Pokeball", id: "2" },
    { name: "Para Healer", id: "3" },
    { name: "Superball", id: "4" },
    { name: "Masterball", id: "5" },
  ];

  const [shoppingList, setShoppingList] = useState(list);

  return (
    <div className="App">
      <h1>Pokemon Shopping List</h1>

      <ul>
        {shoppingList.map((listItem) => (
          <li key={listItem.id}>
            <input type="checkbox" />
            {listItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
