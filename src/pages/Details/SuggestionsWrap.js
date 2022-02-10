import React from 'react';

// onClick시 네비게이트 작동 // url도 props로 받기
function SuggestionsWrap({ list }) {
  const { id, name, price, small_desc, image } = list;
  return (
    <li key={id} className="recommendationWrap">
      <img alt="recommendproduct" src={image} />
      <h3>{name}</h3>
      <span>{price}</span>
      <span>~</span>
      <p>{small_desc}</p>
    </li>
  );
}

export default SuggestionsWrap;
