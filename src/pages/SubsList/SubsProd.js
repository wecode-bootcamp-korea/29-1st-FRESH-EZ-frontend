import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubsProd.scss';

function SubsProd({ data }) {
  const { category, prod, desc, price_info, img_url, img_pos } = data;
  const [buttonMode, setButtonMode] = useState('Default');
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/subsDetail${category}`);
  }
  function emphasizeButton() {
    setButtonMode('Emphasized');
  }
  function resetButton() {
    setButtonMode('Default');
  }

  return (
    <li
      className={`subsProd${buttonMode}`}
      position={img_pos}
      onClick={handleClick}
      onMouseEnter={emphasizeButton}
      onMouseLeave={resetButton}
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
        <div className="subsProdSub">{price_info}</div>
      </div>
    </li>
  );
}

export default SubsProd;
