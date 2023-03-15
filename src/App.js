import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import CharacterDetails from "./CharacterDetails/CharacterDetails.jsx";
import Characters from "./Characters/Characters.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      const sortedCharacters = result.data.results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCharacters(sortedCharacters);
    };
    fetchCharacters();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
      <div>
      

        <Routes>
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route
            path="/"
            element={
              <Characters
                props={{ filteredCharacters, searchTerm, handleSearch }}
              />
            }
          />
        </Routes>
      </div>
  
  );
}


export default App;
