import React from 'react';
import './ProductList.scss';
import ProductCard from './ProductCard';

function ProductList({ title, subnav, productData }) {
  return (
    <div className="ProductList">
      <div className="navWrapper">FRESH-EZ</div>
      <div className="listWrapper">
        <div className="listBody">
          <header className="header">
            <section>
              <div className="title">{title}</div>
            </section>
            <section>
              <nav className="singleNav">
                {subnav.map(info => (
                  <button
                    key={info.id}
                    className={
                      title === info.category
                        ? 'navElementSelected'
                        : 'navElement'
                    }
                  >
                    {info.category}
                  </button>
                ))}
              </nav>
              <div className="allergiesFilterWrap">
                <button className="allergiesFilter">모든 메뉴 보기</button>
                <div className="caption">
                  * 기본적으로 회원님의 알러지 유발 인자가 빠진 메뉴만
                  표시됩니다
                </div>
              </div>
            </section>
          </header>
          <article className="productCardWrap">
            {productData.map((input, idx) => (
              <ProductCard
                key={idx}
                image={input.image}
                name={input.name}
                price={input.price}
                description={input.description}
                score={input.score}
                comments={input.comments}
                vegetarian={input.vegetarian}
              />
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
