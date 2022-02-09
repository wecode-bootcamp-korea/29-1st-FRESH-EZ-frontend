import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';

export default function ProductAll() {
  const [data, setData] = useState({
    category: [],
    product: [],
    allergiesFilterValue: '나에게 안전한 메뉴 보기',
  });

  const testJWT =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.niNmVRTCz9yD_B5BjBhfyVaDVAKyboSxAUxRmOOnvJg';

  const allergiesFilterToggle = () => {
    if (data.allergiesFilterValue === '모든 메뉴 보기') {
      setData(prev => ({
        ...prev,
        allergiesFilterValue: '나에게 안전한 메뉴 보기',
      }));
    } else {
      fetch('', {
        method: 'POST',
        header: JSON.stringify({
          jwt: testJWT,
        }),
      });
      setData(prev => ({
        ...prev,
        allergiesFilterValue: '모든 메뉴 보기',
      }));
    }
  };

  useEffect(() => {
    fetch('http://208.82.62.99:8000/product/menu')
      .then(res => res.json())
      .then(products => {
        //console.log(products.products_list);
        setData(prev => ({ ...prev, product: products.products_list }));
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
        title="전체"
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
