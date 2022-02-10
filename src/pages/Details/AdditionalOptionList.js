import React from 'react';

const AdditionalOptionList = props => {
  const { id, name, price, selectMDProd, handleChecked, isChecked } = props;
  //  const { id, name, price, selectMDProd, checkboxChecked, checkUpdate } = props;

  return (
    <div key={id} className="additionalOption">
      <div className="checkboxAndOption">
        <input
          type="checkbox"
          name={id}
          value={name}
          className="optionCheckbox"
          onClick={selectMDProd}
          // onClick = {handleChecked}
          checked={isChecked}
        />
        <span>{name}</span>
      </div>
      <div>
        <span className="price">{price > 0 && price.toLocaleString()}</span>
        <span>원</span>
      </div>
    </div>
  );
};

export default AdditionalOptionList;
