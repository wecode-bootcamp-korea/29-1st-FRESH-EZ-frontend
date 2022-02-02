import React from 'react';

function SubsOptSelect(props) {
  const { optType, queryKey, content } = props;
  const type = {
    radio: (
      <>
        <input type="radio" name={queryKey} value={content} />
        <label>{content}</label>
      </>
    ),

    datepicker: <input type="date" value={content} />,
    button: <button value={content}>{content}</button>,
  };
  if (optType === 'dropdown')
    return (
      <form className="subsOptSelect">
        <select name={queryKey}>
          {content.map(data => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </form>
    );
  return <form className="subsOptSelect">{type[optType]}</form>;
}

export default SubsOptSelect;
