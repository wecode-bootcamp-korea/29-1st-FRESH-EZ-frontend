import React from 'react';

function SubsOptSelect(props) {
  const { optType, queryKey, value } = props;
  const date = [
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate(),
  ].join('-');
  const type = {
    radio: (
      <>
        <input type="radio" name={queryKey} value={value} />
        <label>{value}</label>
      </>
    ),
    dropdown: (
      <select name={queryKey}>
        <option value={value}>{value}</option>
      </select>
    ),
    datepicker: <input type="date" value={date} />,
    button: <button value={value}>{value}</button>,
  };

  return <form className="subsOptSelect">{type[optType]}</form>;
}

export default SubsOptSelect;
