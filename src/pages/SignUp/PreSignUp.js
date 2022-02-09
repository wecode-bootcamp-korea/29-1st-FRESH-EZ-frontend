import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './PreSignUp.scss';

function PreSignUp() {
  return (
    <>
      <Nav />
      <div className="preSignUp">
        <div className="preSignUpBox">
          <div className="preSignUpHeader">
            <img
              src="images/onlyLogo.png"
              className="logo"
              alt="잠시만 기다려주세요"
            />

            <p>프리미엄 샐러드 배송</p>
          </div>

          <div className="setKakaoConnect">
            <i class="fas fa-comment" />
            <span>카카오로 3초만에 시작하기</span>
          </div>

          <div className="advertiseBanner">
            <Link to="/">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="잠시만 기다려주세요"
              />
            </Link>
          </div>

          <div className="orLine" />
          <div className="or">OR</div>

          {/* 체크 했을 때, 안했을때 css변화, usestate 적용 */}
          <Link to="/">
            <button className="emailSignUpBtn">이메일로 가입하기</button>
          </Link>
          {/* 입력된 정보에 따라서 활성화,비활성화 css, useState 적용 */}

          <button className="appleConnect">
            <i class="fab fa-apple" />
            <span>Apple로 계속하기</span>
          </button>

          {/* 이거 내용이 다 안들어가서 width값을 다 바꿔야 했는데
        그러지않고 쓸 수 있는 더 좋은 방법을 생각하자 */}
        </div>
      </div>
    </>
  );
}

export default PreSignUp;
