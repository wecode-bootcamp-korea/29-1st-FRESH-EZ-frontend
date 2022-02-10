import React from 'react';
import SelectedProduct from '../SelectedProduct';
import ADDITIONS_LIST from '../additionalOptions';
import AdditionalOptionList from '../AdditionalOptionList';
import './SelectionOptionList.scss';

function SelectionOptionList(props) {
  const {
    className,
    productCount,
    setProductCount,
    selectSize,
    sizeInfo,
    selectMDProd,
    selectedProduct,
    sizeState,
    selectedMDProd,
  } = props;

  return (
    <div className={`SelectionOptionList ${className}`}>
      <div className="productSelect">
        <div className="selectCount">
          <h3>수량 선택</h3>
          <div>
            <button
              className="decBtn"
              onClick={() => {
                setProductCount(productCount - 1);
              }}
              disabled={productCount <= 1}
            >
              {'-'}
            </button>
            <span>{productCount}</span>
            <button
              className="incBtn"
              onClick={() => {
                setProductCount(productCount + 1);
              }}
            >
              {'+'}
            </button>
          </div>
        </div>
        <div className="selectSize">
          <h3>사이즈 선택</h3>
          <select onChange={selectSize} value={sizeState}>
            {sizeInfo.map((size, idx) => (
              <option
                key={idx}
                value={Object.keys(size)}
                disabled={productCount === 0}
              >
                {Object.keys(size)}
              </option>
            ))}
          </select>
        </div>
        <div className="selectAddition">
          <h3>함께 드시면 좋을 MD 추천 상품</h3>
          <div className="additionalOptionList">
            {ADDITIONS_LIST.map(list => {
              //console.log(list);
              return (
                <AdditionalOptionList
                  key={list.id}
                  id={list.id}
                  name={list.name}
                  price={list.price}
                  selectMDProd={selectMDProd}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="selectedDetailModal">
        <SelectedProduct
          name={selectedProduct.name}
          size={sizeState}
          price={selectedProduct.price}
          count={productCount}
        />
        {selectedMDProd.map((productInfo, idx) => (
          <SelectedProduct
            key={idx}
            name={productInfo.name}
            price={productInfo.price}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectionOptionList;
