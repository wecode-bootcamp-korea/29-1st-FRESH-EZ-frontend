import React, { useState } from 'react';
import './Details.scss';

function Details() {
  const [menuName, setMenuName] = useState([
    {
      id: 1,
      menuName: '프렌치 발사믹 훈제연어 샐러드',
      content: '부드러운 훈제연어에 트러플오일과 프렌지 발사믹의 깊은 풍미',
      price: '8,900원',
    },
  ]);

  const [recommendMenu, setRecommendMenu] = useState([
    {
      id: 1,
      menuName: '딸기 바닐라 크림치즈 샐러드',
      content: '프렌치 디저트 스타일 셰프메이드 스페셜 메뉴',
      price: '8,010',
    },
  ]);

  // const handleMenuName = () => {
  //   setMenuName(cur => [...cur]);
  // };

  return (
    <div className="menuDetails">
      <div className="menuBody">
        <div className="menuHeader">
          <img src="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/46_20220118112421" />

          {/* <picture> */}
          {/* <source
              srcset="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/46_20220118112421"
              media="(min-width: 900px)"
            /> */}
          {/* </picture> */}

          <div className="menuInfo">
            <div className="menuName">
              <h2>{menuName[0].menuName}</h2>
              <p>{menuName[0]['content']}</p>
              <p className="price">{menuName[0]['price']}</p>
            </div>

            <div className="productExplanation">
              <h3>상품설명</h3>
              <div>
                <p>
                  은은한 연어의 훈연향에 트러플 오일과 프렌치발사믹 드레싱의
                  풍미를 더해 고급스럽게 즐길 수 있는 샐러드예요. 통밀빵으로
                  포만감까지 더했답니다.
                </p>
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
                  <summary>사이즈 선택</summary>
                  <div className="medium">미디움 (M)</div>
                  <div>라지 (L)</div>
                </details>
              </div>
              <div className="selectAddition">
                {/* div 대신에 form 사용가능 */}
                <h3>함께 드시면 좋을 MD 추천 상품</h3>
                <div className="additionalOptionList">
                  <div className="additionalOption">
                    <div className="checkboxAndOption">
                      <input
                        type="checkbox"
                        name="계란 2개"
                        className="optionCheckbox"
                      />
                      <span>계란 2개</span>
                    </div>
                    <div>
                      <span className="price">3,000원</span>
                    </div>
                  </div>

                  <div className="additionalOption">
                    <div className="checkboxAndOption">
                      <input
                        type="checkbox"
                        name="고구마 1개"
                        className="optionCheckbox"
                      />
                      <span>고구마 1개</span>
                    </div>
                    <div>
                      <span className="price">4,000원</span>
                    </div>
                  </div>

                  <div className="additionalOption">
                    <div className="checkboxAndOption">
                      <input
                        type="checkbox"
                        name="고구마 1개"
                        className="optionCheckbox"
                      />
                      <span>아보카도 50g</span>
                    </div>
                    <div>
                      <span className="price">5,000원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="productPrice">
              <p>상품 금액</p>
              <p>
                <span>11,900</span>
                <span>원</span>
              </p>
            </div>
            <div className="makeAnOrder">
              <button className="buttonBasket">장바구니 담기</button>
              <button className="buttonOrder" disabled>
                주문하기
              </button>
            </div>
          </div>
        </div>

        <article className="productRecommendation">
          <div className="recommendationTitle">
            <img src="/images/favicon.png" />
            <h2>다른 고객들이 함께 본 상품</h2>
          </div>

          <div className="recommendationList">
            {/* wrap이 데이터 불러와서 쓰이는부분 */}
            {/* <RecommendWrap></RecommendWrap> */}
            <div className="recommendationWrap">
              <img src="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/244_20220118112717" />
              <h3>{recommendMenu[0].menuName}</h3>
              <span>{recommendMenu[0].price}</span>
              <span>~</span>
              <p>{recommendMenu[0].content}</p>
            </div>
          </div>
        </article>

        <div className="productInformation">
          <img src="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/content/origin/11362_20211130105738" />
        </div>
      </div>
    </div>
  );
}

export default Details;

// function RecommendWrap() {
//   return (
//     <div className="recommendationWrap">
//       <img src="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/244_20220118112717" />
//       <h3>{recommendMenu[0].menuName}</h3>
//       <span>{recommendMenu[0].price}</span>
//       <span>~</span>
//       <p>{recommendMenu[0].content}</p>
//     </div>
//   );
// }
