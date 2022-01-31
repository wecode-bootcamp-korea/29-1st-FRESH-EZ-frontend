import React from 'react';
import './SubsOpt.scss';

function SubsOpt({ modalState, closeModal }) {
  const step = '1';
  const [queryMain, querySub] = ['사이즈는', '어떻게 하시겠어요?'];
  const { id, name, value } = { id: 1, name: 'food_count', value: 'Medium' };
  const subsPredictedPrice = '45,000';

  if (!modalState) return null;

  return (
    <>
      <div className="subsOptOverlay" />
      <div className="subsOptModal">
        <div className="subsOptHeader">
          <div className="subsOptTop">
            <img className="logo" alt="logo" src="/images/favicon.png" />
            <button className="closeButton" onClick={closeModal}>
              𝖷
            </button>
          </div>
          <div className="subsOptTitle">
            <p className="title">구독 옵션 선택하기</p>
            <div className="step">
              <span className="currentStep">{`${step}단계 `}</span>
              <span className="finalStep">/ 6단계</span>
            </div>
          </div>
        </div>
        <div className="subsOptBody">
          <div className="subsOptQuery">
            <p className="queryMain">{queryMain}</p>
            <p className="querySub">{querySub}</p>
          </div>
          <form className="subsOptSelect">
            <input type="radio" id={id} name={name} value={value} />
            <label>{value}</label>
          </form>
        </div>
        <div className="subsOptFooter">
          <div className="subsOptPrice">
            <div className="subsOptSize">
              <span>추천식단 샐러드</span>
              <span> {value} </span>
              <span>사이즈</span>
            </div>
            <div className="subsOptPeriod">
              <span> 하루 1회,</span>
              <span> 주 3일,</span>
              <span> 2주간</span>
              <span> 구독하실 경우 </span>
            </div>
            <p className="subsPredictedPrice">{subsPredictedPrice}원</p>
          </div>
          <div className="subsOptBottom">
            <button className="backButton">{'< 이전'}</button>
            <button className="nextButton">{'다음 >'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubsOpt;
