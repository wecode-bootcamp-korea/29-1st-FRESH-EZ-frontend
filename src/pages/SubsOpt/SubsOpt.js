import React, { useState, useEffect } from 'react';
import SubsOptForm from './SubsOptForm';
import SubsStep from './SubsStep';
import SubsOptQuery from './SubsOptQuery';
import SubsOptSelect from './SubsOptSelect';
import SubsOptPrice from './SubsOptPrice';
import SubsOptStepBtn from './SubsOptStepBtn';
import SubsOptData from './SubsOptData';
import './SubsOpt.scss';

// modal창에서 옵션 선택 안 한 경우에도 esc 키 누를때 모달창 꺼지는 기능

function SubsOpt({ modalState, closeModal }) {
  const [step, setStep] = useState(
    () => Number(window.localStorage.getItem('step')) || 1
  );

  useEffect(() => {
    window.localStorage.setItem('step', JSON.stringify(step));
  }, [step]);

  let data = SubsOptData[step - 1];

  if (!modalState) return null;
  return (
    <>
      <div className="subsOptOverlay" onClick={closeModal} />
      <SubsOptForm
        closeModal={closeModal}
        subsStep={<SubsStep step={step} />}
        subsOptQuery={<SubsOptQuery questions={data.questions} />}
        subsOptSelect={data.selectOpt.optList.map(list => (
          <SubsOptSelect
            key={list.id}
            optType={data.optType}
            queryKey={data.selectOpt.queryKey}
            value={list.value}
          />
        ))}
        subsOptPrice={<SubsOptPrice />}
        subsOptStepBtn={
          <SubsOptStepBtn
            step={step}
            postStep={() => setStep(step - 1)}
            nextStep={() => setStep(step + 1)}
          />
        }
      />
    </>
  );
}

export default SubsOpt;
