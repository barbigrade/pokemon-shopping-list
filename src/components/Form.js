export default function Form() {

    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input name="name" id="name" type="text"></input>
            <button>Add item</button>
        </form>
    )











}