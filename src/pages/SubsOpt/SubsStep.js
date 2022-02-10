import React from 'react';

function SubsStep({ prodCategory, step }) {
  return (
    <div className="subsStep">
      <span className="currentStep">{`${step}단계 `}</span>
      <span className="finalStep">
        {prodCategory === '1' ? '/ 6단계' : '/ 5단계'}
      </span>
    </div>
  );
}

export default SubsStep;
