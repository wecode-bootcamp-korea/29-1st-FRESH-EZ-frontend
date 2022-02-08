import React from 'react';

function SelectedProduct(props) {
  const { name, size, price, isSelected } = props;
  return (
    <div className="selectedDetailTitle">
      <div className="leftArea">
        <span>{name}</span>
        <span> / </span>
        <span>{size}</span>
      </div>
      <div className="rightArea">
        <span>{price}</span>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          onClick={isSelected}
        />
      </div>
    </div>
  );
}

export default SelectedProduct;
