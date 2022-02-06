import React from 'react';

function SelectedSizeModal(props) {
  const { sizeLarge, menu, isClickedSize } = props;
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>{menu}</span>
        <span> / </span>
        <span>{sizeLarge}</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          onClick={isClickedSize}
        />
      </div>
    </div>
  );
}

export default SelectedSizeModal;
