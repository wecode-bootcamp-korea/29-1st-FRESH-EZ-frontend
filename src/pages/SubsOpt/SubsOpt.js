import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [step, setStep] = useState(
    () => Number(window.localStorage.getItem('step')) || 1
  );

  useEffect(() => {
    window.localStorage.setItem('step', JSON.stringify(step));
  }, [step]);

  const [selectedData, setSelectedData] = useState({
    category_id: 1,
    email: 'aaa@gmail.com',
    size: 'Medium',
    food_day_count: '1회',
    food_week_count: '주 3일',
    food_period: '2주',
    food_start: [
      new Date().getFullYear(),
      (new Date().getMonth() + 1).toString().padStart(2, '0'),
      new Date().getDate().toString().padStart(2, '0'),
    ].join('-'),
    product: [],
  });

  let data = SubsOptData[step - 1];
  const selectHandler = e => {
    setSelectedData({
      ...selectedData,
      [data.selectOpt.queryKey]: e.target.value,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('selectedData', JSON.stringify(selectedData));
  }, [selectedData]);

  const moveToBasket = () => {
    alert('장바구니로 이동하시겠습니까?');
    navigate('/basket');
    console.log(window.localStorage.getItem('selectedData'));
    fetch('http://208.82.62.99:8000/product/subscribe-option', {
      method: 'post',
      body: JSON.stringify({
        category_id: '1',
        email: 'aaa@gmail.com',
        size: '1',
        food_day_count: '1',
        food_week_count: '3',
        food_period: '2',
        food_start: [
          new Date().getFullYear(),
          (new Date().getMonth() + 1).toString().padStart(2, '0'),
          new Date().getDate().toString().padStart(2, '0'),
        ].join('-'),
      }),
    });
  };

  const moveToNext = () => {
    alert('식단 구성 단계로 넘어가시겠습니까?');
    navigate('/subsOptSelf');
    console.log(window.localStorage.getItem('selectedData'));
    fetch('http://208.82.62.99:8000/product/subscribe-detail/1')
      .then(res => res.json())
      .then(res => {
        console.log(`${res} ----> 잘나왔음!`);
      });
  };

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
            content={list.content}
            selectHandler={selectHandler}
            selectedValue={selectedData[data.selectOpt.queryKey]}
            moveToBasket={moveToBasket}
            moveToNext={moveToNext}
          />
        ))}
        subsOptPrice={
          <SubsOptPrice
            queryKey={data.selectOpt.queryKey}
            selectedValue={selectedData[data.selectOpt.queryKey]}
            selectedData={selectedData}
          />
        }
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
