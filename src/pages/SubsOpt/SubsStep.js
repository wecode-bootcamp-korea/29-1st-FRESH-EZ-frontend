import React from 'react';

function SubsStep({ step }) {
  return (
    <div className="subsStep">
      <span className="currentStep">{`${step}단계 `}</span>
      <span className="finalStep">/ 6단계</span>
    </div>
  );
}

export default SubsStep;
