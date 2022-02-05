import React from 'react';

const AdditionalOptionList = ({ id, name, price }) => {
  return (
    <div key={id} className="additionalOption">
      <div className="checkboxAndOption">
        <input type="checkbox" name={name} className="optionCheckbox" />
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
