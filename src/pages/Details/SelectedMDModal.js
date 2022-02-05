import React from 'react';

function SelectedMDModal({ isClickedMD }) {
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>계란 2개</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          onClick={isClickedMD}
        />
      </div>
    </div>
  );
}

export default SelectedMDModal;
