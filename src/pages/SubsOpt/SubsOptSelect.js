import React from 'react';

function SubsOptSelect(props) {
  const { optType, queryKey, value } = props;
  const type = {
    radio: (
      <>
        <input type="radio" name={queryKey} value={value} />
        <label>{value}</label>
      </>
    ),
    dropdown: (
      <select name={queryKey}>
        {value.map(content => (
          <option key={content} value={content}>
            {content}
          </option>
        ))}
      </select>
    ),
    datepicker: <input type="date" value={value} />,
    button: <button value={value}>{value}</button>,
  };
  return <form className="subsOptSelect">{type[optType]}</form>;
}

export default SubsOptSelect;
