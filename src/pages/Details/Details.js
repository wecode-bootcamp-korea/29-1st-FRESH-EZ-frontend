import React, { useState, useEffect } from 'react';
import ADDITIONS_LIST from './additionalOptions';

import Large from './Large';
import Medium from './Medium';
import SelectedMDModal from './SelectedMDModal';
import AdditionalOptionList from './AdditionalOptionList';
import RecommendWrap from './RecommendWrap';
import './Details.scss';

function Details() {
  const [menuData, setMenuData] = useState({
    id: 1,
    name: '프렌치 발사믹 훈제연어 샐러드',
    small_desc: '부드러운 훈제연어에 트러플오일과 프렌지 발사믹의 깊은 풍미',
    price: '8900',
    desc: '긴 설명',
    category: '카테고리',
    allergy: '알러지',
    title_image_url: '사진',
  });

  const [recommendProducts, setRecommendProducts] = useState([]);

  const [showMedium, setShowMedium] = useState(false);
  const [showLarge, setShowLarge] = useState(false);

  const [showModalMD, setShowModalMD] = useState(true);

  // const isClickedSize = () => {
  //   setShowModalSize(!showModalSize);
  // };
  const isClickedMedium = () => {
    setShowMedium(!showMedium);
  };
  const isClickedLarge = () => {
    setShowLarge(!showLarge);
  };

  const isClickedMD = () => {
    setShowModalMD(!showModalMD);
  };

  useEffect(() => {
    fetch('http://208.82.62.99:8000/product/product-detail/19')
      .then(res => res.json())
      .then(res => {
        setMenuData(res);
      });
  }, []);
  console.log(menuData);

  useEffect(() => {
    // 목데이터
    fetch('data/recommendData.json', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setRecommendProducts(res);
      });
  }, []);

  const menu = menuData.name;
  console.log('menu', menu);

  const sizeMedium = '미디움 (M)';
  const sizeLarge = '라지 (L)';
  // const totalPrice = menuData.price;
  const sizeUpCost = 1500;

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
                <ul>
                  <li>
                    파우치 드레싱은 샐러드 용기 위에 스티커 부착 되어
                    제공되어요. 기존의 '양념 감자'의 수급 불안정으로 인하여
                  </li>
                  <li>한시적으로 ' 큐브 고구마'로 대체되어 배송되어요.</li>
                </ul>
              </div>
            </div>

            <div className="productSelect">
              <div className="selectSize">
                <h3>상품선택</h3>
                <details>
                  {/* <select>  */}
                  <summary>
                    사이즈 선택 (필수)
                    {/* <option></option> // 미디움,라지를 배열에 넣고 map으로 돌리기 // 속성/기능 value - 선택시 state변경 */}
                    <div className="medium" onClick={isClickedMedium}>
                      {sizeMedium}
                    </div>
                    <div className="large" onClick={isClickedLarge}>
                      {sizeLarge}
                    </div>
                  </summary>
                  {/* </select> */}
                </details>
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
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="selectedDetailModal">
              <div className="selectedDetailWrapper">
                {showMedium === true ? (
                  <Medium
                    isClickedMedium={isClickedMedium}
                    menu={menu}
                    sizeMedium={sizeMedium}
                  />
                ) : null}

                {showLarge === true ? (
                  <Large
                    isClickedLarge={isClickedLarge}
                    menu={menu}
                    sizeLarge={sizeLarge}
                  />
                ) : null}

                {showModalMD === true ? (
                  <SelectedMDModal isClickedMD={isClickedMD} />
                ) : null}

                {/* <div className="selectedDetailInputWrap">
                  <nav className="formNumber">
                    <button>
                      <i className="fas fa-minus"></i>
                    </button>
                    <input type="number" />
                    <button>
                      <i className="fas fa-plus"></i>
                    </button>
                  </nav>
                </div> */}
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
