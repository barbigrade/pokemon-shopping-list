import { nanoid } from "nanoid";
import { useState, useEffect } from "react"
import "./ShopItem.css"

export default function ShopItem({ name, shopInventory, itemURL, onAddListItem }) {
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState();
  const shopItem = {
    name: name,
    id: nanoid(),
    isDone: false,
  }

  useEffect(() => {
    fetch(itemURL)
      .then((eifelturm) => eifelturm.json())
      .then((data) => {
        setItemImage(data.sprites.default)
        setItemPrice(data.cost)
      })
  }, [shopInventory])

  return (

    <li className="inventoryitem"><img alt="" src={itemImage} /><p className="itemname">{name}</p><p className="itemprice">{itemPrice}</p><button type="button" onClick={() => onAddListItem(shopItem)}>Add</button></li>
  )
}