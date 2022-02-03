import React from 'react';

function SubsOptPred({ queryKey, selectedValue, selectedData }) {
  const [value, price] = [selectedValue, 6700];
  const totalCount =
    /\d/.exec(selectedData.food_day_count) *
    /\d/.exec(selectedData.food_week_count) *
    /\d/.exec(selectedData.food_period);
  const totalPrice =
    selectedData.size === 'Large'
      ? (price + 1500) * totalCount
      : price * totalCount;
  return (
    <div className="subsOptPred">
      <div className="subsOptSize">
        <span>추천식단 샐러드</span>
        <span className={queryKey === 'size' ? 'emphasize' : 'normal'}>
          {' '}
          {queryKey === 'size' ? value : selectedData.size}{' '}
        </span>
        <span>사이즈</span>
      </div>
      <div className="subsOptPeriod">
        <span
          className={queryKey === 'food_day_count' ? 'emphasize' : 'normal'}
        >
          {' '}
          하루{' '}
          {queryKey === 'food_day_count' ? value : selectedData.food_day_count},
        </span>
        <span
          className={queryKey === 'food_week_count' ? 'emphasize' : 'normal'}
        >
          {' '}
          {queryKey === 'food_week_count'
            ? value
            : selectedData.food_week_count}
          ,
        </span>
        <span className={queryKey === 'food_period' ? 'emphasize' : 'normal'}>
          {' '}
          {queryKey === 'food_period' ? value : selectedData.food_period} 간
        </span>
        <span> 구독하실 경우 </span>
      </div>
      <p className="subsPredictedPrice">{totalPrice.toLocaleString()}원</p>
    </div>
  );
}

export default SubsOptPred;
