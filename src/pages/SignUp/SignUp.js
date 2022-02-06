import React, { useState } from 'react';
import './SignUp.scss';
import Nav from '../../../src/components/Nav/Nav';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
    nickname: '',
    phone: '',
  });
  const { email, password, name, nickname, phone } = inputs;

  const emailVaildCheck = email.includes('@') && email.includes('.com');
  const passwordVaildCheck = password.search(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
  );

  const handleInput = e => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const emailDuplicateCheck = () => {
    fetch('208.82.62.99:8000', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'ERROR : EMAIL_DUPLICATE') {
          alert('가입 되어있는 이메일 입니다.');
        }
      });
  };

  fetch('208.82.62.99:8000', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      nickname: nickname,
      phone: 'phone',
    }),
  });
  return (
    <>
      <Nav />
      <div className="signUp">
        <div className="signUpBox">
          <div className="signUpHeader">
            <img
              src="images/onlyLogo.png"
              className="logo"
              alt="잠시만 기다려주세요"
            />
            <span>프리미엄 샐러드 배송</span>
          </div>
          <div>
            <div className="userInfo">계정 정보</div>

            <div className="accountId">
              <div>
                <span className="necessary">이메일(아이디)</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="이메일 입력"
                  name="email"
                  value={email}
                  onChange={handleInput}
                />
                <button onClick={emailDuplicateCheck}>중복 확인</button>
              </div>
            </div>

            <div className="accountPw">
              <div>
                <span className="necessary">비밀번호</span>
              </div>
              <input
                type="password"
                placeholder="비밀번호 8자 이상 입력(영문 대/소문자,
          숫자포함)"
                name="password"
                value={password}
                onChange={handleInput}
              />
            </div>
            <div className="accountRePw">
              <div>
                <span className="necessary">비밀번호 재확인</span>
              </div>
              <input
                type="password"
                placeholder="비밀번호 재입력"
                name="rePassword"
                // value={rePassword}
                // onChange={handleInput}
              />
            </div>

            <div className="userInfo">개인 정보</div>
            <div className="personalId">
              <div>
                <span className="necessary">이름</span>
              </div>
              <input
                type="text"
                placeholder="이름 입력"
                name="name"
                value={name}
                onChange={handleInput}
              />
            </div>
            <div className="personalNickName">
              <div>
                <span>닉네임</span>
              </div>
              <input
                type="text"
                placeholder="닉네임 입력(미입력시 이름 자동 입력)"
                name="nickname"
                value={nickname}
                onChange={handleInput}
              />
            </div>

            <div className="phone">
              <div>
                <span className="necessary">휴대폰 번호</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="휴대폰 번호 입력(-제외)"
                  name="phone"
                  value={phone}
                  onChange={handleInput}
                />
                <button>인증 요청</button>
              </div>
            </div>
            <div className="birthday">
              <div>
                <span>생년월일</span>
              </div>
              <div className="birthdayList">
                <select>
                  <option>YYYY</option>
                </select>
                <select>
                  <option>MM</option>
                </select>
                <select>
                  <option>DD</option>
                </select>
              </div>
            </div>

            <span className="sex">성별</span>

            <div className="sexCheck">
              <div className="femaleCheck">
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  // value={sex}
                  // onClick={handleInput}
                />
                <label for="female" />
                <div>여성</div>
              </div>
              <div className="maleCheck">
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  // value={sex}
                  // onClick={handleInput}
                />
                <label for="male" />
                <div>남성</div>
              </div>
              <div className="nobodyCheck">
                <input
                  type="radio"
                  id="nobody"
                  name="sex"
                  // value={sex}
                  // onClick={handleInput}
                />
                <label for="nobody" />
                <div>선택 안 함</div>
              </div>
            </div>
          </div>

          <div className="allergy">
            <span className="necessary">알러지 옵션</span>
            <div>
              <input type="checkbox" id="allergyCheck1" />
              <label for="allergyCheck1" />
              대두 (두유, 두부 등)
            </div>
            <div>
              <input type="checkbox" id="allergyCheck2" />
              <label for="allergyCheck2" />밀
            </div>
            <div>
              <input type="checkbox" id="allergyCheck3" />
              <label for="allergyCheck3" />
              아황산
            </div>
            <div>
              <input type="checkbox" id="allergyCheck4" />
              <label for="allergyCheck4" />
              우유
            </div>
            <div>
              <input type="checkbox" id="allergyCheck5" />
              <label for="allergyCheck5" />
              계란
            </div>
            <div>
              <input type="checkbox" id="allergyCheck6" />
              <label for="allergyCheck6" />
              토마토
            </div>
            <div>
              <input type="checkbox" id="allergyCheck7" />
              <label for="allergyCheck7" />
              메밀
            </div>
            <div>
              <input type="checkbox" id="allergyCheck8" />
              <label for="allergyCheck8" />
              돼지고기
            </div>
            <div>
              <input type="checkbox" id="allergyCheck9" />
              <label for="allergyCheck9" />
              메추리알
            </div>
            <div>
              <input type="checkbox" id="allergyCheck10" />
              <label for="allergyCheck10" />
              땅콩
            </div>

            {/* 맵돌려라.. */}
          </div>

          <button className="signUpButton">가입하기</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
