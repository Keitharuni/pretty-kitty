import React from "react";
import Card from "../Card/Card.component";
import "./CardList.styles.scss";

function CardList({ monsters }) {
  return (
    <div className='card-list'>
      {monsters.map(monster => (
        <Card
          name={monster.name}
          email={monster.email}
          id={monster.id}
          key={monster.id}
        />
      ))}
    </div>
  );
}

export default CardList;
