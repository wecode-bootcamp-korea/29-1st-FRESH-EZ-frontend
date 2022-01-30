import React from 'react';
import SubsProd from './SubsProd';
import SubsListData from './SubsListData';
import './SubsList.scss';

function SubsList() {
  return (
    <ul className="subsList">
      <div className="subsListHead">
        <p className="title">구독 상품</p>
        <p className="subsSlogan">
          <span>구독 횟수부터 식단까지 모두</span>
          <span> 내 맘대로</span>
        </p>
      </div>
      {SubsListData.map(data => {
        return <SubsProd key={data.id} data={data} />;
      })}
    </ul>
  );
}

export default SubsList;