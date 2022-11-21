import { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./componets/CharacterList";

function App() {
  return <div className="App bg-dark text-white">
    <h1 className="text-center display-1 py-4">Rick and Morty</h1>
    <CharacterList/>
  </div>;
}

export default App;
