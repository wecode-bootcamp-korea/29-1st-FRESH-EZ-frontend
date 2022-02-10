import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubsOpt from '../SubsOpt/SubsOpt';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

import './SubsDetail.scss';

function SubsDetail() {
  const [carouselData, setCarouselData] = useState([]);
  const [xValue, setXValue] = useState(0);
  const params = useParams();
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState(false);
  const prodCategory = params.id;

  window.sessionStorage.setItem(
    'JWT',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.tciSp2r2HkiKdb5YLgBY8GRRMIGlfzfNDWXSBE420dg'
  );

  const goLeft = () => {
    if (xValue < 0) {
      setXValue(prev => prev + 486);
    }
  };

  const goRight = () => {
    if (xValue > -(486 * (carouselData.length - 1))) {
      setXValue(prev => prev - 486);
    }
  };

  useEffect(() => {
    fetch(`http://54.165.180.52:8000/product/subscribe-detail/${params.id}`)
      .then(response => response.json())
      .then(response => setCarouselData(response.product_list));
  }, []);

  useEffect(() => {
    fetch('/data/SUBS_CATEGORY.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  useEffect(() => {
    fetch('http://54.165.180.52:8000/product/subscribe-list')
      .then(res => res.json())
      .then(res => {
        window.sessionStorage.setItem('rec_price', res.products[params.id]);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="margin" />
      <div
        className="subsDetail"
        onKeyUp={e => e.key === 'Escape' && setModalState(false)}
      >
        <section className="imgAndInfo">
          <section className="carousel">
            <div
              className="carouselContents"
              style={{ transform: `translateX(${xValue}px)` }}
            >
              {carouselData.map((salads, idx) => {
                return (
                  <div className="separateCarouselContents" key={idx}>
                    <img alt="salad" src={salads.url} />
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
            <div className="header1">
              {data.length > 0 && data[params.id - 1].value} 정기구독
            </div>
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
              원하는 날에, 원하는 끼니에 먹는{' '}
              {data.length > 0 && data[params.id - 1].value} 식단
              <br /> <br />
              ✔ 구성
              <br />
              20종의 {data.length > 0 && data[params.id - 1].value}
              <br />
              원하는 {data.length > 0 && data[params.id - 1].value}로 변경
              가능해요
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
            <button className="subsBtn" onClick={() => setModalState(true)}>
              구독 옵션 세팅하기
            </button>
            <SubsOpt
              modalState={modalState}
              closeModal={() => setModalState(false)}
              prodCategory={prodCategory}
            />
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
              src={`/images/SubsDetail/subscriptionDetail${params.id}.jpg`}
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
      <Footer />
    </>
  );
}

export default SubsDetail;
