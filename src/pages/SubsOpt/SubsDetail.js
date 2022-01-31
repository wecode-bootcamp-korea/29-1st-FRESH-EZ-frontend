import React, { useState } from 'react';
import SubsOpt from './SubsOpt';

function SubsDetail() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <div className="subsDetail">
        <h3>SubsDetail page</h3>
        <button onClick={() => setModalState(true)}>구독하기</button>
      </div>
      <div className="subsOptPortal">
        <SubsOpt
          modalState={modalState}
          closeModal={() => setModalState(false)}
        />
      </div>
    </>
  );
}

export default SubsDetail;
