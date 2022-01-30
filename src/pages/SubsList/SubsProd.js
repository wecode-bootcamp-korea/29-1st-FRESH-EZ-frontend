import React from 'react';
import './SubsProd.scss';

function SubsProd({ data }) {
  const { prod, desc, price_info, img_url, img_pos } = data;

  return (
    <li className="subsProd" position={img_pos}>
      <img className="subsProdImg" alt={prod} src={img_url} />
      <div className="subsProdText">
        <div className="subsProdMain">
          <p className="subsProdName">
            {prod}
            {' >'}
          </p>
          <p className="subsProdDesc">{desc}</p>
        </div>
        <div className="subsProdSub">{price_info}</div>
      </div>
    </li>
  );
}

export default SubsProd;
