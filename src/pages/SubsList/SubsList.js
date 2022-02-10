import React, { useEffect, useState } from 'react';
import SubsProd from './SubsProd';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './SubsList.scss';

function SubsList() {
  const [recommProdPrice, setRecommProdPrice] = useState(['', '', '', '']);
  const [subsListData, setSubsListData] = useState({});
  const addPrice = (prev, curr) => prev + curr;

  useEffect(() => {
    fetch('http://54.165.180.52:8000/product/subscribe-list')
      .then(res => res.json())
      .then(res => {
        setRecommProdPrice(
          Object.values(res.products).map(price => price.reduce(addPrice))
        );
      });
  }, []);

  useEffect(() => {
    fetch('/data/SUBSLIST_DATA.json')
      .then(res => res.json())
      .then(res => setSubsListData(res));
  }, []);

  return (
    <>
      <Nav />
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
              price={recommProdPrice.length > 0 && recommProdPrice[data.id - 1]}
            />
          ))}
      </ul>
      <Footer />
    </>
  );
}

export default SubsList;
