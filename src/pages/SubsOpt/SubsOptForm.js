import React from 'react';

function SubsOptForm(props) {
  const {
    closeModal,
    subsStep,
    subsOptQuery,
    subsOptSelect,
    subsOptPred,
    subsOptStepBtn,
  } = props;
  return (
    <div className="subsOptModal">
      <div className="subsOptHeader">
        <div className="subsOptTop">
          <img className="logo" alt="logo" src="/images/favicon.png" />
          <button className="closeButton" onClick={closeModal}>
            π·
          </button>
        </div>
        <div className="subsOptTitle">
          <p className="title">κ΅¬λ μ΅μ μ ννκΈ°</p>
          {subsStep}
        </div>
      </div>
      <div className="subsOptBody">
        {subsOptQuery}
        <div className="subsOptSelectList">{subsOptSelect}</div>
      </div>
      <div className="subsOptFooter">
        {subsOptPred}
        {subsOptStepBtn}
      </div>
    </div>
  );
}

export default SubsOptForm;
