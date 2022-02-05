import React from 'react';

function SubsOptPred(props) {
  const { queryKey, selectedValue, selectedData } = props;
  const productPrices = window.localStorage
    .getItem('rec_price')
    .split(',')
    .slice(0, 5)
    .map(x => parseInt(x));

  const totalCount =
    /\d/.exec(selectedData.food_day_count) *
    /\d/.exec(selectedData.food_week_count) *
    /\d/.exec(selectedData.food_period);

  const add = (prev, curr) => prev + curr;
  const calcTotalPrice = productPrices => {
    if (totalCount % 5 === 0)
      return productPrices.reduce(add) * (totalCount / 5);
    else
      return (
        productPrices.reduce(add) * (totalCount / 5) +
        productPrices.slice(0, totalCount % 5).reduce(add)
      );
  };
  const checkSize = totalPrice =>
    selectedData.size === 'Large' ? totalPrice + 1000 * totalCount : totalPrice;

  if (queryKey === 'food_start') {
    let date = new Date(selectedValue);
    date.setDate(date.getDate() + 7 * /\d/.exec(selectedData.food_period));
    return (
      <div className="subsOptPred">
        구독 만료 예정일
        <p>
          {date.toLocaleDateString('ko-kr', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'long',
          })}{' '}
        </p>
      </div>
    );
  }
  if (queryKey === 'product') {
    return (
      <div className="subsOptPred">
        <span>현재 선택된 옵션으로</span>
        <span>추천식단 구독시 예상 구독료</span>
        <p>{checkSize(calcTotalPrice(productPrices)).toLocaleString()}원</p>
        <span className="subsOptFinalCaution">
          직접 식단 구성시 구독료 상이
        </span>
      </div>
    );
  }
  return (
    <div className="subsOptPred">
      <div className="subsOptSize">
        <span>추천식단 샐러드</span>
        <span className={queryKey === 'size' ? 'emphasize' : 'normal'}>
          {' '}
          {queryKey === 'size' ? selectedValue : selectedData.size}{' '}
        </span>
        <span>사이즈</span>
      </div>
      <div className="subsOptPeriod">
        <span
          className={queryKey === 'food_day_count' ? 'emphasize' : 'normal'}
        >
          {' '}
          하루{' '}
          {queryKey === 'food_day_count'
            ? selectedValue
            : selectedData.food_day_count}
          ,
        </span>
        <span
          className={queryKey === 'food_week_count' ? 'emphasize' : 'normal'}
        >
          {' '}
          {queryKey === 'food_week_count'
            ? selectedValue
            : selectedData.food_week_count}
          ,
        </span>
        <span className={queryKey === 'food_period' ? 'emphasize' : 'normal'}>
          {' '}
          {queryKey === 'food_period'
            ? selectedValue
            : selectedData.food_period}{' '}
          간
        </span>
        <span> 구독하실 경우 </span>
      </div>
      <p className="subsPredictedPrice">
        {checkSize(calcTotalPrice(productPrices)).toLocaleString()}원
      </p>
    </div>
  );
}
export default SubsOptPred;
