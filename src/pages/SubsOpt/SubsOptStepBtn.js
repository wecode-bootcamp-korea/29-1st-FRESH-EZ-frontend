import React from 'react';

function SubsOptStepBtn(props) {
  const { step, postStep, nextStep } = props;

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
        disabled={step === 6 ? true : false}
      >
        {'다음 >'}
      </button>
    </div>
  );
}

export default SubsOptStepBtn;
