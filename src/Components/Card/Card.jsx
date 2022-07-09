import React from 'react';
import "./Card.css";
const Card = ({item}) => {

  return (
    <div className="card max-width-20">
      <img className="card-img-top" src={item.image} alt="products" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          <small className="text-muted">{item.brand}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{item.price}</small>
        </p>
      </div>
    </div>
  );
}

export {Card}
