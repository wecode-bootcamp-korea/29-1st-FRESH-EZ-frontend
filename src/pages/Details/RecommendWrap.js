import React from 'react';

function RecommendWrap({ id, menuName, price, content, src }) {
  return (
    <li key={id} className="recommendationWrap">
      <img alt="recommendproduct" src={src} />
      <h3>{menuName}</h3>
      <span>{price}</span>
      <span>~</span>
      <p>{content}</p>
    </li>
  );
}

export default RecommendWrap;
