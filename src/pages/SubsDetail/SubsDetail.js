import React from 'react';
import './SubsDetail.scss';

function SubsDetail() {
  return (
    <div className="SubsDetail">
      <header className="imgAndInfo">
        <section>
          <img
            alt="salad"
            src="https://images.squarespace-cdn.com/content/v1/57b346cf5016e16882adfc1a/1542871739671-RNO52NR5YVOFMURF08VR/salad-square.jpg"
          />
          <div>샐러드 이름</div>
          <div>샐러드... 가격</div>
        </section>
        <section className="information">
          <div>샐러드 정기구독</div>
          <div>[기간] 1주-8주 / [배송] 주 1회-6회 / [사이즈] M/L Size</div>
          <div>
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star-half" />
            4.8(후기 3,522)
          </div>
          <div>2주 6회</div>
          <div>36,000원 ~</div>
          <div>상품 설명</div>
          <div>
            주 3일, 하루 한끼 샐러드 식단
            <br />
            1회 배송시 3일치 식단 배송
            <br /> <br />
            ✔ 구성
            <br />
            17종의 샐러드
            <br />
            원하는 샐러드로 변경 가능해요.
            <br /> <br />
            ✔ 주문
            <br />
            수령 요일 : 월~토 중 자율 선택
            <br />
            주문 마감 : 시작일 D-1 오전 8시
            <br /> <br />
            ✔ 혜택
            <br />
            구독 기간이 길어질수록 할인율이 높아져요.
          </div>
          <button>구독 옵션 세팅하기</button>
        </section>
      </header>
      <article className="productDetails">
        <img
          alt="product details"
          src="https://infographicjournal.com/wp-content/uploads/2013/01/hidden-value-of-long-tail-seo-10001.png"
        />
        <div className="selectBtnNextImg">
          <div>2주 6회</div>
          <div>36,000원 ~</div>
          <button>구독 옵션 세팅하기</button>
        </div>
      </article>
    </div>
  );
}

export default SubsDetail;
