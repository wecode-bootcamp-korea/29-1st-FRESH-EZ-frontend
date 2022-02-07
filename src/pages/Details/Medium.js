import React from 'react';

function Medium(props) {
  const { menu, sizeMedium, isClickedMedium } = props;
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>{menu}</span>
        <span> / </span>
        <span>{sizeMedium}</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          onClick={isClickedMedium}
        />
      </div>
    </div>
  );
}

export default Medium;
