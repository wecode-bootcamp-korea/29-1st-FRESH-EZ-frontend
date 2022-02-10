import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductList/components/ProductCard';

export default function Details() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`http://208.82.62.99:8000/product/product-detail/${params.id}`)
      .then(res => res.json())
      .then(res => setProduct([res.name, res.price, res.desc]));
  });

  return (
    <div>
      <div>{product[0]}</div>
      <div>{product[1]}</div>
      <div>{product[2]}</div>
    </div>
  );
}
