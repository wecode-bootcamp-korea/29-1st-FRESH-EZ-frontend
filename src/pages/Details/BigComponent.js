import React, { useState, useEffect } from 'react';
import SelectedProduct from './SelectedProduct';
import ADDITIONS_LIST from './additionalOptions';
import AdditionalOptionList from './AdditionalOptionList';
import SuggestionsWrap from './SuggestionsWrap';
import './Details.scss';
import './BigComponent.scss';

function BigComponent(props) {
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
    calcTotalPrice,
  } = props;

  return (
    <div className={`BigComponent ${className}`}>
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
              {'<'}
            </button>
            <span>{productCount}</span>
            <button
              className="incBtn"
              onClick={() => {
                setProductCount(productCount + 1);
              }}
            >
              {'>'}
            </button>
          </div>
        </div>
        <div className="selectSize">
          <h3>사이즈 선택</h3>
          <select onChange={selectSize}>
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
          price={selectedProduct.price}
          size={sizeState}
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

      {/* <div className="productPrice">
        <p>상품 금액</p>
        <p>
          <span>
            {selectedProduct.message &&
              `${calcTotalPrice().toLocaleString()}원`}
          </span>
        </p>
      </div> */}
    </div>
  );
}

export default BigComponent;
