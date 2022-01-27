import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

export default function ProductAll() {
  const [data, setData] = useState({
    category: [],
    product: [],
  });

  //request body: filter_off드리면 됨... filter_on(로그인)
  //로그인을 했는지 안했는지 확인하는 방법. -> 토큰이 있는지 없는지 확인하면 될 것 같은데...
  useEffect(() => {
    fetch('http://localhost:3000/data/PRODUCT_DATA.json')
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
        title="전체"
        subnav={data.category}
        productData={data.product}
      />
    </div>
  );
}
