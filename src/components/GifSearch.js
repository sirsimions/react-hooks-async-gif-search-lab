import { useState } from "react";

function GifSearch({ onSearch }) {
    const [query, setUserQuery] = useState("");

    function handleChange(e) {
        setUserQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter a Search Term</label>
            <input type={"text"} name="query" id="query" value={query} onChange={handleChange}/>
            <button type="submit">Find Gifs</button>
        </form>
    )
}

export default GifSearch;