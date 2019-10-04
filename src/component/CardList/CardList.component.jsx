import React from "react";
import Card from "../Card/Card.component";
import "./CardList.styles.scss";

function CardList({ kittens }) {
  return (
    <div className='card-list'>
      {kittens.map(kitten => (
        <Card
          name={kitten.name}
          email={kitten.email}
          id={kitten.id}
          key={kitten.id}
        />
      ))}
    </div>
  );
}

export default CardList;
