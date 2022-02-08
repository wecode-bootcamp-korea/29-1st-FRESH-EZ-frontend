import React from 'react';

const AdditionalOptionList = props => {
  const { id, name, price, getSelectedDataInfo } = props;
  return (
    <div key={id} className="additionalOption">
      <div className="checkboxAndOption">
        <input
          type="checkbox"
          name="MDname"
          value={name}
          className="optionCheckbox"
          onClick={getSelectedDataInfo}
        />
        <span>{name}</span>
      </div>
      <div>
        <span className="price">{price}</span>
        <span>원</span>
      </div>
    </div>
  );
};

export default AdditionalOptionList;
