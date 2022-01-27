import React from 'react';
import './ProductCard.scss';

export default function ProductCard({
  image,
  name,
  price,
  description,
  score,
  comments,
  vegetarian,
}) {
  return (
    <section className="productCard">
      <figure className="imgWrapper">
        <img src={image} alt="salad" />
      </figure>
      <div className="productName">{name}</div>
      <div className="price">{price}원~</div>
      <div className="description">{description}</div>
      <div className="cardFooter">
        <div className="scoreComment">
          <div className="score">
            <i className="far fa-star" />
            <div className="scoreNumber">{score}</div>
          </div>
          <div className="comment">
            <i className="far fa-comment-dots" />
            <div className="commentNumber">{comments}</div>
          </div>
        </div>
        <div className="vegeterianOptions">{vegetarian}</div>
      </div>
    </section>
  );
}
