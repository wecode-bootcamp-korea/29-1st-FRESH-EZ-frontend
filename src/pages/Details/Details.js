import React, { useState, useEffect } from 'react';
import ADDITIONS_LIST from './additionalOptions';

import SelectedProduct from './SelectedProduct';
import AdditionalOptionList from './AdditionalOptionList';
import RecommendWrap from './RecommendWrap';
import './Details.scss';

function Details() {
  const [menuData, setMenuData] = useState({});
  const [selectedData, setSelectedData] = useState([]);
  const [showSelection, setShowSelection] = useState(true);
  const [recommendProducts, setRecommendProducts] = useState([]);

  const getSelectedDataInfo = e => {
    const { name, price } = e.target;
    setSelectedData(prev => [...prev, { name: name, price: price }]);
    console.log(e.target);
  };

  const isSelected = () => {
    setShowSelection(!showSelection);
  };

  useEffect(() => {
    fetch('http://208.82.62.99:8000/product/product-detail/19')
      .then(res => res.json())
      .then(res => {
        setMenuData(res);
      });
  }, []);

  useEffect(() => {
    // 목데이터
    fetch('data/recommendData.json', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setRecommendProducts(res);
      });
  }, []);

  const menu = menuData.name;
  // console.log(menu);

  const productSizeList = [
    { name: menu, size: 'Large', price: 1000 },
    { name: menu, size: 'Medium', price: 0 },
  ];

  return (
    <div className="menuDetails">
      <div className="menuBody">
        <div className="menuHeader">
          <picture className="picture">
            <img alt="productImage" src={menuData.title_image_url} />
            {/* <source
              srcset="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/46_20220118112421"
              media="(min-width: 300px)"
            /> */}
          </picture>

          <div className="menuInfo">
            <div className="menuData">
              <h2>{menuData.name}</h2>
              <p>{menuData.small_desc}</p>
              <p className="price">{menuData.price}원</p>
            </div>

            <div className="productExplanation">
              <h3>상품설명</h3>
              <div>
                <p>{menuData.desc}</p>
              </div>
            </div>

            <div className="productSelect">
              <div className="selectSize">
                <h3>상품선택</h3>
                <select defaultValue="test" onChange={getSelectedDataInfo}>
                  {productSizeList.map((productSize, idx) => (
                    <option
                      key={idx}
                      value={productSize.size}
                      price={productSize.price}
                      name={productSize.name}
                    >
                      {productSize.size}
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
                        name={list.name}
                        price={list.price}
                        getSelectedDataInfo={getSelectedDataInfo}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="selectedDetailModal">
              <div className="selectedDetailWrapper">
                {selectedData.map(productInfo => (
                  <SelectedProduct
                    key={productInfo.name}
                    name={productInfo.name}
                    size={productInfo.size}
                    price={productInfo.price}
                    isSelected={isSelected}
                  />
                ))}
              </div>
            </div>

            <div className="productPrice">
              <p>상품 금액</p>
              <p>
                <span>{`${menuData.price + 1500 + 3000}`}</span>
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
                  <RecommendWrap
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
