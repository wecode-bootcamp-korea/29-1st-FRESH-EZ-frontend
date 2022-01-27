import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

export default function ProductAll() {
  const [data, setData] = useState({
    category: [],
    product: [],
  });

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
