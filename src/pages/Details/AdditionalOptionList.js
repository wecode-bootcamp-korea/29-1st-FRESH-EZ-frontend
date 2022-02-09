import React from 'react';

const AdditionalOptionList = props => {
  const { id, name, value, getSelectedMDInfo } = props;
  return (
    <div key={id} className="additionalOption">
      <div className="checkboxAndOption">
        <input
          type="checkbox"
          name={name}
          value={value}
          className="optionCheckbox"
          onClick={getSelectedMDInfo}
        />
        <span>{name}</span>
      </div>
      <div>
        <span className="price">{value}</span>
        <span>원</span>
      </div>
    </div>
  );
};

export default AdditionalOptionList;
