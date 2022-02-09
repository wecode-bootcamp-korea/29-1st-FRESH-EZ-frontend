import React from 'react';

const AdditionalOptionList = props => {
  const { id, name, price, selectMDProd } = props;
  return (
    <div key={id} className="additionalOption">
      <div className="checkboxAndOption">
        <input
          type="checkbox"
          name={id}
          value={name}
          className="optionCheckbox"
          onClick={selectMDProd}
        />
        <span>{name}</span>
      </div>
      <div>
        <span className="price">{price.toLocaleString()}</span>
        <span>원</span>
      </div>
    </div>
  );
};

export default AdditionalOptionList;
