import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard({ image, name, price, description, id }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/products/detail/${id}`);
  };

  return (
    <section className="productCard" onClick={goToDetail}>
      <figure className="imgWrapper">
        <img src={image} alt="food" />
      </figure>
      <div className="productName">{name}</div>
      <div className="price">{price.toLocaleString()}원~</div>
      <div className="description">{description}</div>
      <div className="cardFooter">
        <div className="scoreComment">
          <div className="score">
            <i className="far fa-star" />
            <div className="scoreNumber">4.8</div>
          </div>
          <div className="comment">
            <i className="far fa-comment-dots" />
            <div className="commentNumber">1762</div>
          </div>
        </div>
        <div className="vegeterianOptions">페스코베지테리언</div>
      </div>
    </section>
  );
}
