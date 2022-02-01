import React, { useState } from 'react';
import SubsOpt from './SubsOpt';

function SubsDetail() {
  const [modalState, setModalState] = useState(false);
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
      />
    </div>
  );
}

export default SubsDetail;
