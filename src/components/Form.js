export default function Form({ onAddListItem, length }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.name.value;
    console.log(input);
    const newListItem = { name: input, id: length + 1 };
    onAddListItem(newListItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input name="name" id="name" type="text"></input>
      <button>Add item</button>
    </form>
  );
}
