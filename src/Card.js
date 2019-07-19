import React from "react";
import "./Card.css";

function Card({ name, email, id }) {
  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <h4>{email}</h4>
    </div>
  );
}

export default Card;
