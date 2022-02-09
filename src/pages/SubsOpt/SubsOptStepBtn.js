import React from 'react';

function SubsOptStepBtn(props) {
  const { prodCategory, step, postStep, nextStep } = props;
  const stepLimit = prodCategory === '1' ? 6 : 5;

  return (
    <div className="subsOptBottom">
      <button
        className="backButton"
        onClick={postStep}
        disabled={step === 1 ? true : false}
      >
        {'< 이전'}
      </button>
      <button
        className="nextButton"
        onClick={nextStep}
        disabled={step === stepLimit ? true : false}
      >
        {'다음 >'}
      </button>
    </div>
  );
}

export default SubsOptStepBtn;
