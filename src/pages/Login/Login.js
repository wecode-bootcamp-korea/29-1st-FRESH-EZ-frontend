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

  const checkValidation = email.includes('@') && email.includes('.com');
  const passwordVaildCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const allVaildCheck = checkValidation && passwordVaildCheck.test(password);

  const handleInput = e => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  function signIn() {
    fetch('http://208.82.62.99:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          navigate('/main');
        } else if (res.message === 'INVALID_USER (email)') {
          alert('이메일이 틀렸습니다. 다시 입력해주세요:)');
        } else if (res.message === 'INVALID_USER (password)') {
          alert('비밀번호가 틀렸습니다. 다시 입력해주세요:)');
        }
      });
  }

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
            <Link to="/main">
              <img
                src="images/Login/minibanner.png"
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

          <button
            onClick={signIn}
            className={allVaildCheck ? 'active' : 'unActive'}
            disabled={email === '' || password === '' ? true : false}
          >
            로그인
          </button>

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
                <Link to="/preSignUp">회원가입</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
