import React, { useEffect, useState } from 'react';
import SubsProd from './SubsProd';
import './SubsList.scss';

function SubsList() {
  const [recommProdPrice, setRecommProdPrice] = useState([
    47000, 53000, 55000, 62000,
  ]);
  const [subsListData, setSubsListData] = useState({});
  const addPrice = (prev, curr) => prev + curr;

  // useEffect(() => {
  //   fetch('http://208.82.62.99:8000/product/subscribe-list')
  //     .then(res => res.json())
  //     .then(res => setRecommProdPrice(res.map(price => price.reduce(addPrice))));
  // }, []);

  useEffect(() => {
    fetch('/data/SUBSLIST_DATA.json')
      .then(res => res.json())
      .then(res => setSubsListData(res));
  }, []);

  return (
    <ul className="subsList">
      <div className="subsListHead">
        <p className="title">구독 상품</p>
        <p className="subsSlogan">
          <span>구독 횟수부터 식단까지 모두</span>
          <span> 내 맘대로</span>
        </p>
      </div>
      {subsListData.length > 0 &&
        subsListData.map(data => (
          <SubsProd
            key={data.id}
            data={data}
            price={recommProdPrice[data.id - 1]}
          />
        ))}
    </ul>
  );
}

export default SubsList;
