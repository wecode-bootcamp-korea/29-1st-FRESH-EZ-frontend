import React from 'react';

function SelectedMDModal(props) {
  const { product, isSelected } = props;
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>{product}</span>
      </div>
      <div>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          onClick={isSelected}
        />
      </div>
    </div>
  );
}

export default SelectedMDModal;
