import React from 'react';
import SubsProd from './SubsProd';
import SubsListData from './SubsListData';
import './SubsList.scss';

function SubsList() {
  return (
    <ul className="SubsList">
      <div className="SubsListHead">
        <p className="title">구독 상품</p>
        <p className="SubsSlogan">
          <span>구독 횟수부터 식단까지 모두</span>
          <span> 내 맘대로</span>
        </p>
      </div>
      {SubsListData.map(data => {
        return (
          <SubsProd
            key={data.id}
            prod={data.prod}
            desc={data.desc}
            price_info={data.price_info}
            img_url={data.img_url}
            img_pos={data.img_pos}
          />
        );
      })}
    </ul>
  );
}

export default SubsList;
