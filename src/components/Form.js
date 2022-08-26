export default function Form(onAddListItem) {

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.name.value;
        const newListItem = { name: input, id: };
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input name="name" id="name" type="text"></input>
            <button>Add item</button>
        </form>
    )










}