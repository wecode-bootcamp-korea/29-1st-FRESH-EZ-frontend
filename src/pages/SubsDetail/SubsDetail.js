import React from 'react';
import './SubsDetail.scss';

function SubsDetail() {
  return (
    <div className="SubsDetail">
      <header className="imgAndInfo">
        <img
          alt="salad"
          src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
        />
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
        </section>
      </header>
      <article>
        <img
          alt="product details"
          src="https://infographicjournal.com/wp-content/uploads/2013/01/hidden-value-of-long-tail-seo-10001.png"
        />
      </article>
    </div>
  );
}

export default SubsDetail;
