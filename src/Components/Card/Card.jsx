import React from 'react';
import "./Card.css";
const Card = ({item}) => {

  return (
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{item.title}</h4>
        <h6 class="card-subtitle text-muted">{item.title}</h6>
      </div>
      <img src={item.image} alt="CardImage" />
      <div class="card-block">
        <p class="card-text">{item.brand}</p>
        <p class="card-text">{item.price}</p>
        <button href="#" class="card-link">
          Purchase
        </button>
        <button href="#" class="card-link">
          Wishlist{" "}
        </button>
      </div>
    </div>
  );
}

export {Card}
