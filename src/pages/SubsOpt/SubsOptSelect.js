import React from 'react';

function SubsOptSelect({ selectOpt }) {
  const { id, name, value } = selectOpt;
  return (
    <form className="subsOptSelect">
      <input type="radio" id={id} name={name} value={value} />
      <label>{value}</label>
    </form>
  );
}

export default SubsOptSelect;
