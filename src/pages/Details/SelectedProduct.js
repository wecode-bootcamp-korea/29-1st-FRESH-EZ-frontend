import React from 'react';

function SelectedProduct(props) {
  const { menu, selectSize } = props;
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>{menu}</span>
        <span> / </span>
        <span>{selectSize}</span>
        <span>{selectSize === 'large' && '1000원'}</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          // onClick={isClickedMedium}
        />
      </div>
    </div>
  );
}

export default SelectedProduct;
