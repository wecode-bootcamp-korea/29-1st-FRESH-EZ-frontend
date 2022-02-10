import React from 'react';
import './ProductList.scss';
import ProductCard from './ProductCard';
import CategoryButton from './CategoryButton';

function ProductList({ title, subnav, productData, children, goToCategory }) {
  return (
    <div className="ProductList2">
      <div className="listWrapper">
        <div className="listBody">
          <header className="header">
            <section>
              <div className="title">오늘의 신제품</div>
            </section>
            <section />
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
