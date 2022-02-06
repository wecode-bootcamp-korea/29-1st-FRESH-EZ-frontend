import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

export default function ProductAll() {
  const [data, setData] = useState({
    category: [],
    product: [],
    allergiesFilterValue: '나에게 안전한 메뉴 보기',
  });

  const allergiesFilterToggle = () => {
    if (data.allergiesFilterValue === '모든 메뉴 보기') {
      fetch('url', {
        method: 'post',
        body: JSON.stringify({
          filter: 'off',
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            alert('success!');
          }
        });
      setData(prev => ({
        ...prev,
        allergiesFilterValue: '나에게 안전한 메뉴 보기',
      }));
    } else {
      fetch('url', {
        method: 'post',
        body: JSON.stringify({
          filter: 'on',
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            alert('success!');
          }
        });
      setData(prev => ({
        ...prev,
        allergiesFilterValue: '모든 메뉴 보기',
      }));
    }
  };
  //request body: filter_off드리면 됨... filter_on(로그인)
  //로그인을 했는지 안했는지 확인하는 방법. -> 토큰이 있는지 없는지 확인하면 될 것 같은데...
  useEffect(() => {
    fetch('http://208.82.62.99:8000/product/menu/3', {
      method: 'post',
    })
      .then(res => res.json())
      .then(products => {
        setData(prev => ({ ...prev, product: products }));
      });

    fetch('http://localhost:3000/data/SUB_CATEGORY.json')
      .then(res => res.json())
      .then(categories => {
        setData(prev => ({ ...prev, category: categories }));
      });
  }, []);

  return (
    <div>
      <ProductList
        title="도시락 · 간편식"
        subnav={data.category}
        productData={data.product}
      >
        <button className="allergiesFilter" onClick={allergiesFilterToggle}>
          {data.allergiesFilterValue}
        </button>
      </ProductList>
    </div>
  );
}