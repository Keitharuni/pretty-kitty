import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import "./App.css";
import { SearchBox } from "./hooks/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([
    { name: "Keith", email: "keith@aol.com", id: 1 },
    { name: "Kelley", email: "kelley@aol.com", id: 2 },
    { name: "Kevin", email: "kevin@aol.com", id: 3 },
    { name: "Sam", email: "sam@aol.com", id: 4 },
    { name: "Sean", email: "sean@aol.com", id: 5 }
  ]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setMonsters(users));
  });

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='Search Monsters'
        handleChange={e => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
