import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
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
            <Link to="/main">
              <img src="images/SignUp/banner1.png" alt="잠시만 기다려주세요" />
            </Link>
          </div>

          <div className="orLine" />
          <div className="or">OR</div>

          <Link to="/signUp">
            <button className="emailSignUpBtn">이메일로 가입하기</button>
          </Link>

          <button className="appleConnect">
            <i class="fab fa-apple" />
            <span>Apple로 계속하기</span>
          </button>
        </div>
      </div>
      <div className="marginbottom" />
      <Footer />
    </>
  );
}

export default PreSignUp;
