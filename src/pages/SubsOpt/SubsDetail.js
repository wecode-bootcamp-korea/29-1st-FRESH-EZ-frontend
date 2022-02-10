import React, { useState, useEffect } from 'react';
import SubsOptServeCalc from './SubsOptServeCalc';
import SubsOpt from './SubsOpt';

function SubsDetail() {
  const [modalState, setModalState] = useState(false);
  const prodCategory = '4';

  useEffect(() => {
    fetch('http://54.165.180.52:8000/product/subscribe-list')
      .then(res => res.json())
      .then(res => {
        window.sessionStorage.setItem('rec_price', res.products[prodCategory]);
      });
  }, []);

  return (
    <div
      className="subsDetail"
      onKeyUp={e => e.key === 'Escape' && setModalState(false)}
    >
      <h3>SubsDetail page</h3>
      <button onClick={() => setModalState(true)}>구독하기</button>
      <SubsOpt
        modalState={modalState}
        closeModal={() => setModalState(false)}
        prodCategory={prodCategory}
      />
    </div>
  );
}

export default SubsDetail;
