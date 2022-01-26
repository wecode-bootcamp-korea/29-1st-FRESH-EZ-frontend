import React from 'react';
import './SubsProd.scss';

// 버튼 배경 이미지를 넣으면, 반응형 사이즈 조절할때 비율 깨지는 현상 발생 가능하니..
// 그냥 간단한 아이콘 이미지를 div로 얹기!
// 창을 완전히 줄이면 없어지고, 텍스트만 남게!

function SubsProd() {
  return (
    <div className="SubsProd">
      <div />
      <div>
        <p className="SubProdName">{props.name}</p>
        <p className="">{props.name}</p>
      </div>
    </div>
  );
}

export default SubsProd;
