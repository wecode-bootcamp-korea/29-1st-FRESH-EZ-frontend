import React, { useState, useEffect } from 'react';
import ADDITIONS_LIST from './additionalOptions';

import SelectedProduct from './SelectedProduct';
import AdditionalOptionList from './AdditionalOptionList';
import SuggestionsWrap from './SuggestionsWrap';
import './Details.scss';

function Details() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [sizeState, setSizeState] = useState('Medium');
  const [selectedMDProd, setSelectedMDProd] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [recommendProducts, setRecommendProducts] = useState([]);

  const sizeInfo = [{ Medium: 0 }, { Large: 1000 }];

  const selectSize = e => setSizeState(e.target.value);

  const selectMDProd = e => {
    if (e.target.checked) {
      const { name, size, price } = ADDITIONS_LIST[e.target.name];
      setSelectedMDProd(prev => [
        { name: name, size: size, price: price },
        ...prev,
      ]);
    } else {
      setSelectedMDProd(
        selectedMDProd.filter(data => data.name !== e.target.value)
      );
    }
  };

  const deleteData = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  useEffect(() => {
    fetch('http://208.82.62.99:8000/product/product-detail/19')
      .then(res => res.json())
      .then(res => {
        setSelectedProduct(res);
      });
  }, []);

  useEffect(() => {
    fetch('data/recommendData.json')
      .then(res => res.json())
      .then(res => {
        setRecommendProducts(res);
      });
  }, []);

  return (
    <div className="menuDetails">
      <div className="menuBody">
        <div className="menuHeader">
          <picture className="picture">
            <img alt="productImage" src={selectedProduct.title_image_url} />
            {/* <source
              srcset="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/46_20220118112421"
              media="(min-width: 300px)"
            /> */}
          </picture>

          <div className="menuInfo">
            <div className="menuData">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.small_desc}</p>
              <p className="price">{selectedProduct.price}원</p>
            </div>

            <div className="productExplanation">
              <h3>상품설명</h3>
              <div>
                <p>{selectedProduct.desc}</p>
              </div>
            </div>

            <div className="productSelect">
              <div className="selectCount">
                <h3>수량 선택</h3>
                <button
                  className="decBtn"
                  // onClick={deleteData}
                  disabled={productCount === 0}
                >
                  {'<'}
                </button>
                <span>{productCount}</span>
                <button
                  className="incBtn"
                  // onClick={setProductCount(productCount + 1)}
                >
                  {'>'}
                </button>
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

            <div className="productPrice">
              <p>상품 금액</p>
              <p>
                <span>{`${selectedProduct.price + 1500 + 3000}`}</span>
                <span>원</span>
              </p>
            </div>
            <div className="makeAnOrder">
              <button className="buttonBasket">장바구니 담기</button>
              <button className="buttonOrder">주문하기</button>
            </div>
          </div>
        </div>

        <article className="productRecommendation">
          <div className="recommendationTitle">
            <img alt="favicon" src="/images/favicon.png" />
            <h2>다른 고객들이 함께 본 상품</h2>
          </div>

          <ul className="recommendationList">
            {recommendProducts && // 이 데이터가 있을때만 그려준다
              recommendProducts.map(list => {
                return (
                  <SuggestionsWrap
                    key={list.id}
                    menuData={list.menuData}
                    price={list.price}
                    content={list.content}
                    src={list.src}
                  />
                );
              })}
          </ul>
        </article>

        <div className="productInformation">
          <img
            alt="productinformation"
            src="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/content/origin/11362_20211130105738"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
