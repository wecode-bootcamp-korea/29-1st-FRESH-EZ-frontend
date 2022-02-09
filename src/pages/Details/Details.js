import React, { useState, useEffect } from 'react';
import ADDITIONS_LIST from './additionalOptions';

import MDModal from './MDModal';
import SizeModal from './SizeModal';
import AdditionalOptionList from './AdditionalOptionList';
import SuggestionsWrap from './SuggestionsWrap';
import './Details.scss';

function Details() {
  const [menuData, setMenuData] = useState({});

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedMD, setSelectedMD] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  const [showModal, setShowModal] = useState(true);

  const [suggestionProducts, setSuggestionProducts] = useState([]);

  const getSelectedSizeInfo = e => {
    setSelectedSize([...selectedSize, e.target.value]);
  };

  const getSelectedMDInfo = e => {
    const { name, value } = e.target;
    setSelectedMD([...selectedMD, { name: name, value: value }]);
  };
  console.log(selectedMD);

  // const getSelectedMDInfo = e => {
  //   const { name, value } = e.target;
  //   setSelectedMD(prev => [...prev, { name: name, value: value }]);
  // };

  const toggleOption = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetch('http://208.82.62.99:8000/product/product-detail/19')
      .then(res => res.json())
      .then(res => {
        setMenuData(res);
      });
  }, []);

  useEffect(() => {
    fetch('data/recommendData.json', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setSuggestionProducts(res);
      });
  }, []);

  const menu = menuData.name;
  // const totalPrice = `${menuData.price + 1500 + 3000}`

  const productSizeList = [
    { name: '사이즈 선택', value: '' },
    { name: 'Medium', value: 'Medium' },
    { name: 'Large', value: 'Large' },
  ];

  return (
    <div className="menuDetails">
      <div className="menuBody">
        <div className="menuHeader">
          <picture className="picture">
            <img alt="productImage" src={menuData.title_image_url} />
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
                <select defaultValue="test" onChange={getSelectedSizeInfo}>
                  {productSizeList.map((data, idx) => (
                    <option key={idx} name={data.name} value={data.value}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="selectAddition">
                <h3>함께 드시면 좋을 MD 추천 상품</h3>
                <div className="additionalOptionList">
                  {ADDITIONS_LIST.map((list, idx) => {
                    return (
                      <AdditionalOptionList
                        key={idx}
                        name={list.name}
                        value={list.value}
                        getSelectedMDInfo={getSelectedMDInfo}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="selectedDetailModal">
              <div className="selectedDetailWrapper">
                {selectedSize.map(
                  (data, idx) => (
                    // showModal === true ?
                    <SizeModal
                      key={idx}
                      name={data}
                      value={data}
                      toggleOption={toggleOption}
                    />
                  ) // : null
                )}

                {selectedMD.map((data, idx) => (
                  <MDModal
                    key={idx}
                    name={data.name}
                    value={data.value}
                    toggleOption={toggleOption}
                  />
                ))}
              </div>
            </div>

            <div className="productPrice">
              <p>상품 금액</p>
              <p>
                {/* <span>{totalPrice}</span> */}
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
            {suggestionProducts && // 이 데이터가 있을때만 그려준다
              suggestionProducts.map(list => {
                return (
                  <SuggestionsWrap
                    key={list.id}
                    menuName={list.menuName}
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
