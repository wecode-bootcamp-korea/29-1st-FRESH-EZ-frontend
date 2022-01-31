import React from 'react';

function SubsOptPrice({ selectOpt }) {
  const { id, name, value, price } = selectOpt;
  return (
    <div className="subsOptPrice">
      <div className="subsOptSize">
        <span>추천식단 샐러드</span>
        <span> {value} </span>
        <span>사이즈</span>
      </div>
      <div className="subsOptPeriod">
        <span> 하루 1회,</span>
        <span> 주 3일,</span>
        <span> 2주간</span>
        <span> 구독하실 경우 </span>
      </div>
      <p className="subsPredictedPrice">{price}원</p>
    </div>
  );
}

export default SubsOptPrice;
