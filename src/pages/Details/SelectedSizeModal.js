import React from 'react';

function SelectedSizeModal({ sizeLarge }) {
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>프렌치 발사믹 훈제연어 샐러드</span>
        <span> / </span>
        <span>{sizeLarge}</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
        />
      </div>
    </div>
  );
}

export default SelectedSizeModal;
