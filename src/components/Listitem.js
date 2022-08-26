export default function Listitem({listitems, onRemoveListItem}){
    
    function handleClick(){
        
    }
    
    
    return (
    listitems.map((listItem) => (
        <li key={listItem.id}>
          <input type="checkbox" />
          {listItem.name}
          <button onClick={handleClick}>X</button>
        </li>
    )))}


