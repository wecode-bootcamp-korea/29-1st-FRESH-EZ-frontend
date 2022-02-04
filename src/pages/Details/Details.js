import React, { useState, useEffect } from 'react';
import ADDITIONS_LIST from './additionalOptions';
import './Details.scss';

function Details() {
  const [menuName, setMenuName] = useState([
    {
      id: 1,
      menuName: '프렌치 발사믹 훈제연어 샐러드',
      content: '부드러운 훈제연어에 트러플오일과 프렌지 발사믹의 깊은 풍미',
      price: '8900',
    },
  ]);

  const [recommendProducts, setRecommendProducts] = useState([]);
  // console.log(recommendProducts);

  useEffect(() => {
    fetch('data/recommendData.json', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setRecommendProducts(res);
      });
  }, []);

  const sizeMedium = '미디움 (M)';
  const sizeLarge = '라지 (L)';
  const totalPrice = menuName[0].price;
  const sizeUpCost = 1500;
  // 가격들 array에 담고 값들을 숫자로 변환한뒤 총합을 구하는것도 방법
  // 아니면 백틱 사용

  return (
    <div className="menuDetails">
      <div className="menuBody">
        <div className="menuHeader">
          <img
            alt="productImage"
            src="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/46_20220118112421"
          />

          {/* <picture> */}
          {/* <source
              srcset="https://s3.ap-northeast-2.amazonaws.com/freshcode/menu/origin/46_20220118112421"
              media="(min-width: 900px)"
            /> */}
          {/* </picture> */}

          <div className="menuInfo">
            <div className="menuName">
              <h2>{menuName[0].menuName}</h2>
              <p>{menuName[0].content}</p>
              <p className="price">{menuName[0].price}원</p>
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
                  <div className="medium">{sizeMedium}</div>
                  <div className="large">{sizeLarge}</div>
                </details>
              </div>
              <div className="selectAddition">
                {/* div 대신에 form 사용가능 */}
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
                <SelectedSizeModal sizeLarge={sizeLarge} />
                <SelectedMDModal />

                <div className="selectedDetailTitle">
                  <div>
                    <span>{menuName[0].menuName}</span>
                    <span> / </span>
                    <span>{sizeLarge}</span>
                  </div>
                  <div>
                    <img
                      alt="선택 삭제"
                      src="https://www.freshcode.me/images/exit@2x.png"
                    />
                  </div>
                </div>

                <div className="selectedDetailInputWrap">
                  <nav className="formNumber">
                    <button>
                      <i className="fas fa-minus"></i>
                    </button>
                    <input type="number" />
                    <button>
                      <i className="fas fa-plus"></i>
                    </button>
                  </nav>
                </div>
              </div>
            </div>

            <div className="productPrice">
              <p>상품 금액</p>
              <p>
                <span>{`${+totalPrice + 1500 + 3000}`}</span>
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

function SelectedSizeModal({ sizeLarge }) {
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>프렌치 발사믹 훈제연어 샐러드</span>
        <span> / </span>
        <span>{sizeLarge}</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
        />
      </div>
    </div>
  );
}

function SelectedMDModal() {
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>계란 2개</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
        />
      </div>
    </div>
  );
}

const AdditionalOptionList = ({ id, name, price }) => {
  return (
    <div key={id} className="additionalOption">
      <div className="checkboxAndOption">
        <input type="checkbox" name={name} className="optionCheckbox" />
        <span>{name}</span>
      </div>
      <div>
        <span className="price">{price}</span>
        <span>원</span>
      </div>
    </div>
  );
};

function RecommendWrap({ id, menuName, price, content, src }) {
  return (
    <li key={id} className="recommendationWrap">
      <img alt="recommendproduct" src={src} />
      <h3>{menuName}</h3>
      <span>{price}</span>
      <span>~</span>
      <p>{content}</p>
    </li>
  );
}
