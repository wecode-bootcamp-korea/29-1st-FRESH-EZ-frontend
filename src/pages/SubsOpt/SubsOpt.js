import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubsOptForm from './SubsOptForm';
import SubsStep from './SubsStep';
import SubsOptQuery from './SubsOptQuery';
import SubsOptSelect from './SubsOptSelect';
import SubsOptPred from './SubsOptPred';
import SubsOptStepBtn from './SubsOptStepBtn';
import SubsOptData from './SubsOptData';
import './SubsOpt.scss';

// modal창에서 옵션 선택 안 한 경우에도 esc 키 누를때 모달창 꺼지는 기능 추가

function SubsOpt({ modalState, closeModal }) {
  const testJwt =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.niNmVRTCz9yD_B5BjBhfyVaDVAKyboSxAUxRmOOnvJg';
  const prodCategory = '1';
  const navigate = useNavigate();
  const [step, setStep] = useState(
    () => Number(window.localStorage.getItem('step')) || 1
  );

  useEffect(() => {
    window.localStorage.setItem('step', JSON.stringify(step));
  }, [step]);

  const [selectedData, setSelectedData] = useState({
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

  // 나중에 local storage에서 ctegory_id, jwt 받아와서 넣어줘야함
  // client 단에서 preprocessing하는 것 vs server에서 받을 때 하는 것 효율?
  const preprocessUserData = userData => {
    let sizeNum = userData.size === 'Medium' ? '1' : '2';
    return {
      ...userData,
      category_id: prodCategory,
      jwt: testJwt,
      size: sizeNum,
      food_day_count: /\d/.exec(userData.food_day_count).toString(),
      food_week_count: /\d/.exec(userData.food_week_count).toString(),
      food_period: /\d/.exec(userData.food_period).toString(),
    };
  };

  const moveToBasket = () => {
    alert('장바구니로 이동하시겠습니까?');
    navigate('/basket');
    fetch('http://208.82.62.99:8000/product/subscribe-option', {
      method: 'post',
      body: JSON.stringify(preprocessUserData(selectedData)),
    });
  };

  const moveToNext = () => {
    alert('식단 구성 단계로 넘어가시겠습니까?');
    navigate('/subsOptSelf');
    fetch(`http://208.82.62.99:8000/product/subscribe-detail/${prodCategory}`)
      .then(res => res.json())
      .then(res => {
        window.localStorage.setItem('products', res.products);
        window.localStorage.setItem('image_list', res.image_list);
        window.localStorage.setItem('price', res.price);
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
        SubsOptPred={
          <SubsOptPred
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
