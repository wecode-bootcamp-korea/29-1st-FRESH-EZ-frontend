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
        <section>
          <div>샐러드 정기구독</div>
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
