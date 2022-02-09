import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';
import ProductCard from './ProductCard';

function ProductList({ title, subnav, productData, children }) {
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
                  <Link className="text-link" to={info.links} key={info.id}>
                    <button
                      className={
                        title === info.category
                          ? 'navElementSelected'
                          : 'navElement'
                      }
                    >
                      {info.category}
                    </button>
                  </Link>
                ))}
              </nav>
              <div className="allergiesFilterWrap">
                {children}
                <div className="caption">
                  * 기본적으로 회원님의 알러지 유발 인자가 빠진 메뉴만
                  표시됩니다
                </div>
              </div>
            </section>
          </header>
          <article className="productCardWrap">
            {productData.map(input => {
              return <ProductCard key={input.product_id} input={input} />;
            })}
          </article>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
