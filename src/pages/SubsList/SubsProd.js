import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubsProd.scss';

function SubsProd(props) {
  const { data, price } = props;
  const { id, prod, desc, img_url, img_pos } = data;
  const [buttonMode, setButtonMode] = useState('Default');
  const navigate = useNavigate();

  return (
    <li
      className={`subsProd${buttonMode}`}
      position={img_pos}
      onClick={() => navigate(`/subsDetail/${id}`)}
      onMouseEnter={() => setButtonMode('Emphasized')}
      onMouseLeave={() => setButtonMode('Default')}
    >
      <img className="subsProdImg" alt={prod} src={img_url} />
      <div className="subsProdText">
        <div className="subsProdMain">
          <p className="subsProdName">
            {prod}
            {' >'}
          </p>
          <p className="subsProdDesc">{desc}</p>
        </div>
        <div className="subsProdSub">
          2주 구독 {price.toLocaleString()}원 ~{' '}
        </div>
      </div>
    </li>
  );
}

export default SubsProd;
