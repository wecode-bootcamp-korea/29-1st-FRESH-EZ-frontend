import React from 'react';

function SubsOptSelect(props) {
  const {
    optType,
    queryKey,
    content,
    selectHandler,
    selectedValue,
    moveToCart,
    moveToNext,
  } = props;
  const type = {
    radio: (
      <div className="radioBtn">
        <input
          type="radio"
          name={queryKey}
          value={content}
          checked={content === selectedValue}
          onChange={selectHandler}
        />
        <label onClick={selectHandler}>{content}</label>
      </div>
    ),

    datepicker: (
      <input
        type="date"
        defaultValue={selectedValue}
        checked={content === selectedValue}
        onChange={selectHandler}
      />
    ),
    button: (
      <button
        className="dietOptBtn"
        value={content}
        onClick={content === '네! 추천해주세요' ? moveToCart : moveToNext}
      >
        {content}
      </button>
    ),
  };
  if (optType === 'dropdown')
    return (
      <form className="subsOptSelect">
        <select
          name={queryKey}
          defaultValue={selectedValue}
          checked={content === selectedValue}
          onChange={selectHandler}
        >
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
