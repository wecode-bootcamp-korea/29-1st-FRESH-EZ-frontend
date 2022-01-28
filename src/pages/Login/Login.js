import React from 'react';
import './Login.scss';
import Nav from '../../components/Nav/Nav';

import { Link, NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <Nav />
      <div className="login">
        <div className="loginBox">
          <div className="loginHeader">
            <img src="images/onlyLogo.png" className="logo" />

            <p>프리미엄 샐러드 배송</p>
          </div>
          <div className="kakaoConnect">
            <i class="fas fa-comment" />
            <span>카카오로 3초만에 시작하기</span>
          </div>

          <div className="advertiseBanner">
            <NavLink className="fontGray" to="/">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="잠시만 기다려주세요"
              />
            </NavLink>
          </div>

          <div className="orLine"></div>
          <div className="or">OR</div>

          <div className="inputInfo">
            <input type="text" placeholder="이메일(아이디) 입력" />
            <input type="text" placeholder="비밀번호 입력" />
          </div>

          <div className="autoLogin">
            <input type="checkbox" />
            <span>자동로그인</span>
          </div>

          {/* 체크 했을 때, 안했을때 css변화, usestate 적용 */}
          <button className="loginBtn">로그인</button>
          {/* 입력된 정보에 따라서 활성화,비활성화 css, useState 적용 */}

          <button className="appleConnect">
            <i class="fab fa-apple" />
            <span>Apple로 계속하기</span>
          </button>

          <div className="findAndSignUp">
            <ul className="find">
              <li>
                <Link className="fontGray" to="/">
                  이메일(아이디) 찾기
                </Link>
              </li>
              <li>
                <NavLink className="fontGray" to="/">
                  비밀번호 찾기
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className="fontGray" to="/presignuppage">
                  회원가입
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
