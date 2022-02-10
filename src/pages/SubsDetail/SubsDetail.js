import React, { useState, useEffect } from 'react';
import './SubsDetail.scss';

function SubsDetail() {
  const imageLists = [
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG',
      name: '두툼한 스테이크 샐러드',
      price: '8990',
    },
    {
      id: 2,
      image:
        'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3',
      name: '랍스터 샐러드',
      price: '8990',
    },
    {
      id: 3,
      image:
        'https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s',
      name: '대게 샐러드',
      price: '8990',
    },
  ];
  const [carouselData, setCarouselData] = useState([]);
  const [xValue, setXValue] = useState(0);

  const goLeft = () => {
    if (xValue < 0) {
      setXValue(prev => prev + 486);
    }
  };

  const goRight = () => {
    if (xValue > -(486 * (imageLists.length - 1))) {
      setXValue(prev => prev - 486);
    }
  };

  useEffect(() => {
    fetch('http://208.82.62.99:8000/product/subscribe-detail/1')
      .then(response => response.json())
      .then(response => setCarouselData(prev => [...prev, response]));
  }, []);

  return (
    <div className="subsDetail">
      <section className="imgAndInfo">
        <section className="carousel">
          <div
            className="carouselContents"
            style={{ transform: `translateX(${xValue}px)` }}
          >
            {imageLists.map(salads => {
              return (
                <div className="separateCarouselContents" key={salads.id}>
                  <img alt="salad" src={salads.image} />
                  <div className="imgNameAndPrice">
                    <div>{salads.name}</div>
                    <div>{salads.price}원</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carouselControls">
            <div className="leftRightArrow">
              <i className="fas fa-angle-left" onClick={goLeft} />
              <i className="fas fa-angle-right" onClick={goRight} />
            </div>
          </div>
        </section>
        <section className="information">
          <div className="header1">샐러드 정기구독</div>
          <div className="header2">
            [기간] 1주-8주 / [배송] 주 1회-6회 / [사이즈] M/L Size
          </div>
          <div className="header3">
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half" />
            </div>
            4.8(후기 3,522)
          </div>
          <div className="header4">2주 6회</div>
          <div className="header1">36,000원 ~</div>
          <div className="infoDetail">
            <div className="header4">상품설명</div>
            원하는 날에, 원하는 끼니에 먹는 샐러드 식단
            <br /> <br />
            ✔ 구성
            <br />
            20종의 샐러드
            <br />
            원하는 샐러드로 변경 가능해요
            <br /> <br />
            ✔ 주문
            <br />
            수령 요일 : 월~토 중 자율 선택
            <br />
            주문 마감 : 시작일 D-1 오전 8시
            <br /> <br />
            ✔ 혜택
            <br />
            구독 기간이 길어질수록 할인율이 높아져요
            <br />
            추가옵션 상품도 주차별 할인율이 적용돼요
            <br /> <br />
            ✔ 필독사항
            <br />
            식단은 기본 식단이 들어가요
            <br />
            구독 옵션에서 이를 바꿀 수 있어요
          </div>
          <button className="subsBtn">구독 옵션 세팅하기</button>
        </section>
      </section>
      <div className="inPageTab">
        <button className="btnSelected">상품정보</button>
        <button className="btnNoSelected">상세정보</button>
        <button className="btnNoSelected">FAQ</button>
        <button className="btnNoSelected">고객후기</button>
        <div className="empty" />
      </div>
      <article className="productDetails">
        <div className="imgAndBtn">
          <img
            className="productDetailLeft"
            alt="product details"
            src="https://infographicjournal.com/wp-content/uploads/2013/01/hidden-value-of-long-tail-seo-10001.png"
          />
          <div className="productDetailRight">
            <div className="title">구독 옵션</div>
            <div className="price">
              <div className="left">2주 6회</div>
              <div className="right">36,000원~</div>
            </div>
            <button className="subsBtn">구독 옵션 세팅하기</button>
          </div>
        </div>
        <details className="toggleList">
          <summary className="summary">상품 정보 고시</summary>
          클릭 후 보여질 내용
        </details>
        <details className="toggleList">
          <summary className="summary">영양 정보 고시</summary>
          클릭 후 보여질 내용
        </details>
        <div className="summary">FAQ</div>
        <details className="toggleList">
          <summary className="summaryFAQ">
            <i className="fas fa-question-circle" />
            결제 안내
          </summary>
          클릭 후 보여질 내용
        </details>
        <details className="toggleList">
          <summary className="summaryFAQ">
            <i className="fas fa-question-circle" />
            주문단계안내
          </summary>
          클릭 후 보여질 내용
        </details>
        <details className="toggleList">
          <summary className="summaryFAQ">
            <i className="fas fa-question-circle" />
            취소 및 환불 안내
          </summary>
          클릭 후 보여질 내용
        </details>
        <details className="toggleList">
          <summary className="summaryFAQ">
            <i className="fas fa-question-circle" />
            배송 안내
          </summary>
          클릭 후 보여질 내용
        </details>
        <details className="toggleList">
          <summary className="summaryFAQ">
            <i className="fas fa-question-circle" />
            기타 사항(자주 묻는 질문)
          </summary>
          클릭 후 보여질 내용
        </details>
      </article>
    </div>
  );
}

export default SubsDetail;
