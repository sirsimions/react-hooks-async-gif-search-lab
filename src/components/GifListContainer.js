import React, { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer({ url, apiKey }) {
    const [gifs, setGifs] = useState([]);

    function onSearch(queryString) {
        fetch(`${url}${queryString}&api_key=${apiKey}&rating=g&limit=3`)
            .then(response => response.json())
            .then(responseData => {
                setGifs(responseData.data.map(gif => gif.images.original.url));
            });  
    }

    return (
        <div>
            <GifSearch onSearch={onSearch}/>
            <GifList gifs={gifs}/>
        </div>
    )
}

export default GifListContainer;