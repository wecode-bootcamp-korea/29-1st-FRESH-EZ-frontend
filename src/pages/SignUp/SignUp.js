import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
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
              <span className="afterElementAdd">이메일(아이디)</span>
            </div>
            <div>
              <input type="text" placeholder="이메일 입력" />
              <button>중복 확인</button>
            </div>
          </div>

          <div className="accountPw">
            <div>
              <span className="afterElementAdd">비밀번호</span>
            </div>
            <input
              type="password"
              placeholder="비밀번호 8자 이상 입력(영문 대/소문자,
          숫자포함)"
            />
          </div>
          <div className="accountRePw">
            <div>
              <span className="afterElementAdd">비밀번호 재확인</span>
            </div>
            <input type="password" placeholder="비밀번호 재입력" />
          </div>

          <div className="userInfo">개인 정보</div>
          <div className="personalId">
            <div>
              <span className="afterElementAdd">이름</span>
            </div>
            <input type="text" placeholder="이름 입력" />
          </div>
          <div className="personalNickName">
            <div>
              <span>닉네임</span>
            </div>
            <input
              type="text"
              placeholder="닉네임 입력(미입력시 이름 자동 입력)"
            />
          </div>

          <div className="phoneNumber">
            <div>
              <span className="afterElementAdd">휴대폰 번호</span>
            </div>
            <div>
              <input type="text" placeholder="휴대폰 번호 입력(-제외)" />
              <button>인증 요청</button>
            </div>
          </div>
          <div className="birthday">
            <div>
              <span>생년월일</span>
            </div>
            <div className="birthdayList">
              <div>YYYY</div>
              <div>MM</div>
              <div>DD</div>
            </div>
          </div>

          <span className="gender">성별</span>

          <div className="genderCheck">
            <div className="femaleCheck">
              <input type="radio" />
              <div>여성</div>
            </div>
            <div className="maleCheck">
              <input type="radio" />
              <div>남성</div>
            </div>
            <div className="nobodyCheck">
              <input type="radio" />
              <div>선택 안 함</div>
            </div>
          </div>
        </div>

        <div className="allergy">
          <div>
            <span className="afterElementAdd">알러지 옵션</span>
          </div>
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유
          <input type="checkbox" />
          우유 ㅎㅎ..맵돌려라^^..
        </div>

        <button className="signUpButton">가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;
