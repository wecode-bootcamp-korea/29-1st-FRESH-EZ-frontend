import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

export default function ProductAll() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/PRODUCT_DATA.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <ProductList title="전체" subnav={SUB_CATEGORY} productData={product} />
    </div>
  );
}

const SUB_CATEGORY = [
  {
    id: 1,
    category: '전체',
  },
  {
    id: 2,
    category: '샐러드',
  },
  {
    id: 3,
    category: '샌드위치 · 랩',
  },
  {
    id: 4,
    category: '도시락 · 간편식',
  },
  {
    id: 5,
    category: '죽 · 스프',
  },
  {
    id: 6,
    category: '간식',
  },
  {
    id: 7,
    category: '음료',
  },
];
