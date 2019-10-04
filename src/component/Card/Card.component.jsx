import React from "react";
import "./Card.styles.scss";

function Card({ name, email, id }) {
  return (
    <div className='card-container'>
      <img
        alt='Kitten'
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <h4>{email}</h4>
    </div>
  );
}

export default Card;
