import React, { useState, useEffect } from "react";
import CardList from "./component/CardList/CardList.component";
import "./App.css";
import { SearchBox } from "./hooks/SearchBox";

function App() {
  const [kittens, setKittens] = useState([
    { name: "Keith Blackmon", email: "keith@fake.com", id: 1 },
    { name: "Kelley Smellbottom", email: "kelley@fake.com", id: 2 },
    { name: "Kevin Market", email: "kevin@fake.com", id: 3 },
    { name: "Sam Wells", email: "sam@fake.com", id: 4 },
    { name: "Sean Theman", email: "sean@fake.com", id: 5 }
  ]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setKittens(users));
  });

  const filteredKittens = kittens.filter(kitten =>
    kitten.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Pretty Kitty</h1>
      <SearchBox
        placeholder='Search Kittens'
        handleChange={e => setSearchField(e.target.value)}
      />
      <CardList kittens={filteredKittens} />
    </div>
  );
}

export default App;
