import React from 'react';
import SubsStep from './SubsStep';
import SubsOptQuery from './SubsOptQuery';
import SubsOptSelect from './SubsOptSelect';
import SubsOptPrice from './SubsOptPrice';
import './SubsOpt.scss';

// modal 바깥쪽 선택 및 esc 키 누를때 모달창 꺼지는 기능
// children으로 받아서 단계 구현

function SubsOpt({ modalState, closeModal }) {
  const step = '1';
  const questions = { queryMain: '사이즈는', querySub: '어떻게 하시겠어요?' };
  const selectOpt = {
    id: 1,
    name: 'food_count',
    value: 'Medium',
    price: '45,000',
  };

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
            <SubsStep step={step} />
          </div>
        </div>
        <div className="subsOptBody">
          <SubsOptQuery questions={questions} />
          <SubsOptSelect selectOpt={selectOpt} />
        </div>
        <div className="subsOptFooter">
          <SubsOptPrice selectOpt={selectOpt} />
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
