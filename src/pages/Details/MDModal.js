import React from 'react';

function MDModal(props) {
  const { name, value, toggleOption } = props;
  return (
    <div className="selectedDetailTitle">
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{value}</span>
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          onClick={toggleOption}
        />
      </div>
    </div>
  );
}

export default MDModal;
