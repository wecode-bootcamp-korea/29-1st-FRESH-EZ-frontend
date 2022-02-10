import React from 'react';

function SelectedProduct(props) {
  const { name, size, price, count } = props;
  return (
    <div className="selectedList">
      <div className="listTop">
        <div className="nameArea">
          <span>{name}</span>
          <span> {size && '/'} </span>
          <span>{size}</span>
        </div>
        <div className="priceArea">
          {/* <span>{`${price.toLocaleString()}원`}</span> */}
          <span>{price}원</span>
        </div>
      </div>
      <p className="listBottom">{size && count}</p>
    </div>
  );
}

export default SelectedProduct;
