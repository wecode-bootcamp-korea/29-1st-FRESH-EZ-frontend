import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';
import ProductCard from './ProductCard';

function ProductList({ title, subnav, productData, children }) {
  /*const vegeterianSelector = () => {
    Math.round(Math.random() * 5) === 0
      ? return '비건'
      : Math.round(Math.random() * 5) === 1
      ? return '락토베지테리언'
      : Math.round(Math.random() * 5) === 2
      ? return '페스코베지테리언'
      : Math.round(Math.random() * 5) === 3
      ? return '폴로베지테리언'
      : Math.round(Math.random() * 5) === 4
      ? return '플렉시테리언'
      : return '오보베지테리언';
  };*/

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
            {productData.map(input => (
              <ProductCard
                key={input.id}
                image={input.image_url}
                name={input.name}
                price={input.price}
                description={input.small_desc}
              />
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
