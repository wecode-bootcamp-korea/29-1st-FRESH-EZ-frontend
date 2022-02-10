import React from 'react';

function SubsOptPred(props) {
  const { prodCategory, queryKey, selectedValue, selectedData } = props;
  const productPrices = window.sessionStorage
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
      return productPrices.reduce(add) * parseInt(totalCount / 5);
    else
      return (
        productPrices.reduce(add) * parseInt(totalCount / 5) +
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
        <span>구독 만료 예정일</span>
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

  const categoryName = {
    1: ' 샐러드',
    2: ' 샌드위치',
    3: ' 도시락',
    4: ' 반반메뉴',
  };

  const predictionDesc = [
    { id: 'size', text1: ' ', text2: ' 사이즈,' },
    { id: 'food_day_count', text1: ' 하루 ', text2: ',' },
    { id: 'food_week_count', text1: ' ', text2: ',' },
    { id: 'food_period', text1: ' ', text2: ' 동안' },
  ];

  return (
    <div className="subsOptPred">
      <div className="subsPredictionDesc">
        <span>추천식단</span>
        <span>{categoryName[prodCategory]}</span>
        {(prodCategory === '1'
          ? predictionDesc
          : predictionDesc.slice(1, 4)
        ).map(desc => {
          return (
            <React.Fragment key={desc.id}>
              <span className={queryKey === desc.id ? 'emphasize' : 'normal'}>
                {desc.text1}
                {queryKey === desc.id
                  ? selectedValue
                  : selectedData[`${desc.id}`]}
              </span>
              <span>{desc.text2}</span>
            </React.Fragment>
          );
        })}
        <span> 구독하실 경우 </span>
      </div>
      <p className="subsPredictedPrice">
        {checkSize(calcTotalPrice(productPrices)).toLocaleString()}원
      </p>
    </div>
  );
}
export default SubsOptPred;
