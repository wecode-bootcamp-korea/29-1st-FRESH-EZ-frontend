import React from 'react';
import './SubsProd.scss';

function SubsProd({ prod, desc, price_info, img_url, img_pos }) {
  return (
    <li className="SubsProd" position={img_pos}>
      <img className="SubsProdImg" alt={prod} src={img_url} />
      <div className="SubsProdText">
        <div className="SubsProdMain">
          <p className="SubsProdName">
            {prod}
            {' >'}
          </p>
          <p className="SubsProdDesc">{desc}</p>
        </div>
        <div className="SubsProdSub">{price_info}</div>
      </div>
    </li>
  );
}

export default SubsProd;
