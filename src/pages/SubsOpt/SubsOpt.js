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

function SubsOpt(props) {
  const { modalState, closeModal, prodCategory } = props;
  const navigate = useNavigate();
  const [step, setStep] = useState(
    () => Number(window.sessionStorage.getItem('step')) || 1
  );

  useEffect(() => {
    window.sessionStorage.setItem('step', JSON.stringify(step));
  }, [step]);

  const [selectedData, setSelectedData] = useState({
    size: 'Medium',
    food_day_count: '1회',
    food_week_count: '주 3일',
    food_period: '2주',
    food_start_date: [
      new Date().getFullYear(),
      (new Date().getMonth() + 1).toString().padStart(2, '0'),
      new Date().getDate().toString().padStart(2, '0'),
    ].join('-'),
  });

  const data = prodCategory === '1' ? SubsOptData[step - 1] : SubsOptData[step];

  const selectHandler = e => {
    setSelectedData({
      ...selectedData,
      [data.selectOpt.queryKey]: e.target.value,
    });
  };

  useEffect(() => {
    window.sessionStorage.setItem('selectedData', JSON.stringify(selectedData));
  }, [selectedData]);

  const preprocessUserData = userData => {
    let sizeNum = userData.size === 'Medium' ? '1' : '2';
    return {
      ...userData,
      categoryId: prodCategory,
      size: sizeNum,
      food_day_count: /\d/.exec(userData.food_day_count).toString(),
      food_week_count: /\d/.exec(userData.food_week_count).toString(),
      food_period: /\d/.exec(userData.food_period).toString(),
    };
  };
  const JWT = window.sessionStorage.getItem('JWT');

  const moveToCart = () => {
    if (window.confirm('장바구니로 이동하시겠습니까?')) {
      fetch('http://54.165.180.52:8000/product/subscribe-option', {
        method: 'post',
        headers: { Authorization: JWT },
        body: JSON.stringify(preprocessUserData(selectedData)),
      });
      navigate('/cart');
      window.sessionStorage.removeItem('selectedData');
      window.sessionStorage.removeItem('step');
    }
  };

  const moveToNext = () => {
    if (window.confirm('식단 구성 단계로 넘어가시겠습니까?')) {
      fetch(
        `http://54.165.180.52:8000/product/subscribe-detail/${prodCategory}`
      )
        .then(res => res.json())
        .then(res => {
          window.sessionStorage.setItem('products', res.products);
          window.sessionStorage.setItem('image_list', res.image_list);
          window.sessionStorage.setItem('price', res.price);
        });
      navigate('/subsOptSelf');
    }
  };

  if (!modalState) return null;
  return (
    <>
      <div className="subsOptOverlay" onClick={closeModal} />
      <SubsOptForm
        closeModal={closeModal}
        subsStep={<SubsStep prodCategory={prodCategory} step={step} />}
        subsOptQuery={<SubsOptQuery questions={data.questions} />}
        subsOptSelect={data.selectOpt.optList.map(list => (
          <SubsOptSelect
            key={list.id}
            optType={data.optType}
            queryKey={data.selectOpt.queryKey}
            content={list.content}
            selectHandler={selectHandler}
            selectedValue={selectedData[data.selectOpt.queryKey]}
            moveToCart={moveToCart}
            moveToNext={moveToNext}
          />
        ))}
        subsOptPred={
          <SubsOptPred
            prodCategory={prodCategory}
            queryKey={data.selectOpt.queryKey}
            selectedValue={selectedData[data.selectOpt.queryKey]}
            selectedData={selectedData}
          />
        }
        subsOptStepBtn={
          <SubsOptStepBtn
            prodCategory={prodCategory}
            step={step}
            postStep={() => setStep(step => step - 1)}
            nextStep={() => setStep(step => step + 1)}
          />
        }
      />
    </>
  );
}

export default SubsOpt;
