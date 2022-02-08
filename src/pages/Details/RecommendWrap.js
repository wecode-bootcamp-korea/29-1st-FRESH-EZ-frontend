import React from 'react';

// onClick시 네비게이트 작동 // url도 props로 받기
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
