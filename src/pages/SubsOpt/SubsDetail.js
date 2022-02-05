import React, { useState, useEffect } from 'react';
import SubsOptServeCalc from './SubsOptServeCalc';
import SubsOpt from './SubsOpt';

function SubsDetail() {
  const [modalState, setModalState] = useState(false);
  const testJWT =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.niNmVRTCz9yD_B5BjBhfyVaDVAKyboSxAUxRmOOnvJg';
  const prodCategory = '1';

  useEffect(() => {
    fetch(`http://208.82.62.99:8000/product/subscribe-detail/${prodCategory}`)
      .then(res => res.json())
      .then(res => {
        window.localStorage.setItem('rec_price', res.price);
      });
  }, []);

  return (
    <div
      className="subsDetail"
      onKeyUp={e => e.key === 'Escape' && setModalState(false)}
    >
      <h3>SubsDetail page</h3>
      <button onClick={() => setModalState(true)}>구독하기</button>
      <SubsOptServeCalc
        modalState={modalState}
        closeModal={() => setModalState(false)}
        testJWT={testJWT}
        prodCategory={prodCategory}
      />
    </div>
  );
}

export default SubsDetail;
