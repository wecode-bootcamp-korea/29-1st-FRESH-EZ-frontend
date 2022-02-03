import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const checkValidation = email.includes('@') && password.length > 3;
  // const email = inputs.email;
  // const password = inputs.password;
  // const [isActive, setIsActive] = useState(false);

  // const goToMain = () => {
  //   checkValidation
  //     ? navigate('/main')
  //     : alert('제대로 입력되지 않았습니다. 다시 시도해주세요');
  // };

  const handleInput = e => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };
  function signIn() {
    fetch('http://208.82.62.99:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: 'email',
        password: 'password',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          navigate('/main');
        } else {
          alert('다시 입력해주세요:)');
        }
        // console.log('결과 : ', res.message, res.jwt);
      });
  }
  // const isPassedLogin = () => {
  //   checkValidation ? setIsActive(true) : setIsActive(false);
  // };

  return (
    <>
      <Nav />
      <div className="login">
        <div className="loginBox">
          <div className="loginHeader">
            <img
              src="images/onlyLogo.png"
              className="logo"
              alt="잠시만 기다려주세요"
            />

            <p>프리미엄 샐러드 배송</p>
          </div>
          <div className="kakaoConnect">
            <i className="fas fa-comment" />
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

          <div className="inputInfo">
            <input
              name="email"
              value={email}
              type="text"
              onChange={handleInput}
              placeholder="이메일(아이디) 입력"
            />
            <input
              name="password"
              value={password}
              type="password"
              onChange={handleInput}
              placeholder="비밀번호 입력"
            />
          </div>

          <div className="autoLogin">
            <input type="checkbox" id="auto" />
            <label for="auto" />
            <span>자동로그인</span>
          </div>

          {/* 체크 했을 때, 안했을때 css변화, usestate 적용 */}
          <button
            onClick={signIn}
            className={checkValidation ? 'active' : 'unActive'}
            disabled={email === '' || password === '' ? true : false}
          >
            로그인
          </button>
          {/* 입력된 정보에 따라서 활성화,비활성화 css, useState 적용 */}

          <button className="appleConnect">
            <i className="fab fa-apple" />
            <span>Apple로 계속하기</span>
          </button>

          <div className="findAndSignUp">
            <ul className="find">
              <li>
                <Link to="/">이메일(아이디) 찾기</Link>
              </li>
              <li>
                <Link to="/">비밀번호 찾기</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/presignuppage">회원가입</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
