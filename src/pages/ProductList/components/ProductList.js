import React from 'react';
import './ProductList.scss';
import ProductCard from './ProductCard';
import CategoryButton from './CategoryButton';

function ProductList({ title, subnav, productData, children, goToCategory }) {
  return (
    <div className="ProductList">
      <div className="listWrapper">
        <div className="listBody">
          <header className="header">
            <section>
              <div className="title">{title}</div>
            </section>
            <section>
              <nav className="singleNav">
                {subnav.map(info => (
                  <CategoryButton
                    key={info.id}
                    info={info}
                    title={title}
                    goToCategory={goToCategory}
                  />
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
