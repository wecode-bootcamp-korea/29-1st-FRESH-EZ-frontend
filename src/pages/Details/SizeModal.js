import React from 'react';

function SizeModal(props) {
  const { name, value, toggleOption } = props;
  return (
    <div className="selectedDetailTitle">
      <div className="leftArea">
        <span>{name}</span>
        {/* <span> / </span> */}
      </div>
      <div className="rightArea">
        {/* <span>{value}</span> */}
        <img
          alt="선택 삭제"
          src="https://www.freshcode.me/images/exit@2x.png"
          onClick={toggleOption}
        />
      </div>
    </div>
  );
}

export default SizeModal;
