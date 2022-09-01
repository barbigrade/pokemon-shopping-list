import { nanoid } from "nanoid";
import { useState, useEffect } from "react"
import "./ShopItem.css"

export default function ShopItem({pokeItem, onAddListItem }) {
  const moreInfos = pokeItem.url;
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState();
  const shopItem = {
    name: pokeItem.name,
    id: nanoid(),
    isDone: false,
  }


  useEffect(() => {
    fetch(moreInfos)
      .then((eifelturm) => eifelturm.json())
      .then((data) => {
        setItemImage(data.sprites.default)
        setItemPrice(data.cost)
      })
  }, [moreInfos])

  return (

    <li className="inventoryitem"><img alt="" src={itemImage} /><p className="itemname">{pokeItem.name}</p><p className="itemprice">{itemPrice}</p><button type="button" onClick={() => onAddListItem(shopItem)}>Add</button></li>
  )
}