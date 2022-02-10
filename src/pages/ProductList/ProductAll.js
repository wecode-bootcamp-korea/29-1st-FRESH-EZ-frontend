import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductList from './components/ProductList';
import PaginationButton from './components/PaginationButton';
import './ProductAll.scss';

export default function ProductAll() {
  const [data, setData] = useState({
    category: [],
    product: [],
    allergiesFilterValue: '나에게 안전한 메뉴 보기',
  });

  const [query, setQuery] = useState({
    category: '',
    offset: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const LIMIT = 16;
  //const testJWT = window.sessionStorage.getItem('JWT');
  const testJWT =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.tciSp2r2HkiKdb5YLgBY8GRRMIGlfzfNDWXSBE420dg';

  //Allergy Filter Data fetch
  const allergiesFilterToggle = () => {
    if (data.allergiesFilterValue === '모든 메뉴 보기') {
      fetch(
        `http://208.82.62.99:8000/product/menu${
          location.search || `?offset=0&limit=${LIMIT}`
        }`
      )
        .then(res => res.json())
        .then(products => {
          setData(prev => ({ ...prev, product: products.products_list }));
        });
      setData(prev => ({
        ...prev,
        allergiesFilterValue: '나에게 안전한 메뉴 보기',
      }));
    } else {
      fetch(
        `http://208.82.62.99:8000/product/menu/filter${
          location.search || `?offset=0&limit=${LIMIT}`
        }`,
        {
          method: 'POST',
          headers: {
            Authorization: testJWT,
          },
        }
      )
        .then(res => res.json())
        .then(filtered => {
          setData(prev => ({ ...prev, product: filtered.products_filtered }));
        });
      setData(prev => ({
        ...prev,
        allergiesFilterValue: '모든 메뉴 보기',
      }));
    }
  };
  //initiall Data Fetch
  useEffect(() => {
    fetch(
      `http://208.82.62.99:8000/product/menu${
        location.search || `?offset=0&limit=${LIMIT}`
      }`
    )
      .then(res => res.json())
      .then(products => {
        setData(prev => ({ ...prev, product: products.products_list }));
      });

    fetch('http://localhost:3000/data/SUB_CATEGORY.json')
      .then(res => res.json())
      .then(categories => {
        setData(prev => ({ ...prev, category: categories }));
      });
  }, [location.search]);

  const updateOffset = buttonIndex => {
    const offset = buttonIndex * LIMIT;
    const queryString = `offset=${offset}&limit=${LIMIT}`;
    setQuery(prev => (prev.offset = queryString));
    console.log(query.offset);
  };

  useEffect(() => {
    navigate(`&${query.category}&${query.offset}`);
  }, [query]);

  return (
    <div className="productAll">
      <ProductList
        title="전체"
        subnav={data.category}
        productData={data.product}
      >
        <button className="allergiesFilter" onClick={allergiesFilterToggle}>
          {data.allergiesFilterValue}
        </button>
      </ProductList>
      <PaginationButton updateOffset={updateOffset} />
    </div>
  );
}
