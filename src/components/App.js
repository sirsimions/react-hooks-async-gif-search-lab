import React from "react";
import GifListContainer from "./GifListContainer";
import NavBar from "./NavBar";

function App() {
  const url = "https://api.giphy.com/v1/gifs/search?q=";
  const apiKey = "on9woP14ckcuPElqVojY7aXsdTrrTbbK";

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer url = {url} apiKey = {apiKey}/>
    </div>
  );
}

export default App;