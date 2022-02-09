import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../src/components/Nav/Nav';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate('');
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
    nickname: '',
    phone: '',
    year: '',
    month: '',
    day: '',
    sex: '',
    // allergy: '',
    allergy: [],
  });

  const {
    email,
    password,
    name,
    nickname,
    phone,
    sex,
    allergy,
    year,
    month,
    day,
  } = inputs;

  const [rePwCheck, setRePwCheck] = useState('');

  const [allergyData, setAllergyData] = useState([]);
  useEffect(() => {
    fetch('http://208.82.62.99:8000/user/allergy')
      .then(res => res.json())
      .then(res => {
        setAllergyData(res.allergies_list);
        // setAllergyData(prev => [res.allergies_list, ...prev]);
      });
  }, []);

  // const emailVaildCheck = email.includes('@') && email.includes('.com');
  const passwordVaildCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordVaildCheck2 =
    passwordVaildCheck.test(password) && passwordVaildCheck.test(rePwCheck);

  const goPwCheck = () => {
    if (passwordVaildCheck.test(password) === false) {
      alert('비밀번호 조건에 맞춰 다시 작성해주세요.');
    }
  };
  const yearData = () => {
    const year = [];
    for (let i = 2009; i > 1930; i--) {
      year.push(i);
    }
    return year;
  };

  const yearDataArr = yearData();

  const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const dayData = () => {
    const day = [];
    for (let i = 1; i < 32; i++) {
      day.push(i);
    }
    return day;
  };
  const dayDataArr = dayData();

  const checkError = () => {
    if (password !== rePwCheck) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
    }
  };

  const handleInput = e => {
    console.log(inputs);
    const { name, value } = e.target;

    setInputs(prev => ({ ...prev, [name]: value }));
  };
  const handleRePwInput = e => {
    setRePwCheck(e.target.value);
  };

  // useEffect(() => {
  //   console.log(inputs);
  // }, [inputs]);

  const selectAllergy = e => {
    if (e.target.checked) {
      setInputs(prev => ({
        allergy: [...prev.allergy, e.target.value],
      }));
    } else {
      setInputs(prev => ({
        allergy: inputs.allergy.filter(data => data !== e.target.value),
      }));
    }
  };

  const emailDuplicateCheck = () => {
    fetch('http://208.82.62.99:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ERROR : EMAIL_DUPLICATE') {
          alert('가입 되어있는 이메일 입니다.');
        } else {
          alert('사용가능한 이메일 입니다.');
        }
      });
  };

  const signUpCheck = () => {
    fetch('http://208.82.62.99:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        nickname: nickname,
        phone: phone,
        birth: `${year}-${month}-${day}`,
        sex: sex,
        allergy_id: allergy,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'ERROR : INVALID_VALUE (email)') {
          alert('이메일 입력 시 @와 .com이 필수로 포함되어야 합니다');
        } else if (res.message === 'ERROR : INVALID_VALUE (password)') {
          alert(
            '비밀번호 입력 시 문자 8자 이상, 소문자, 대문자, 숫자, 특수기호 포함되어야 합니다'
          );
        } else {
          navigate('/main');
        }
      });
    console.log(
      JSON.stringify({
        name: name,
        email: email,
        password: password,
        nickname: nickname,
        phone: phone,
        birth: `${year}-${month}-${day}`,
        sex: sex,
        allergy_id: allergy,
      })
    );
  };

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
          숫자, 특수문자 포함)"
                name="password"
                value={password}
                onChange={handleInput}
                onBlur={goPwCheck}
              />
            </div>

            <div className="accountRePw">
              <div>
                <span className="necessary">비밀번호 재확인</span>
              </div>
              <input
                type="password"
                placeholder="비밀번호 재입력"
                value={rePwCheck}
                onChange={handleRePwInput}
                onBlur={checkError}
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
                <select name="year" onChange={handleInput}>
                  <option>YYYY</option>
                  {yearDataArr.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select name="month" onChange={handleInput}>
                  <option>MM</option>
                  {monthArr.map(month => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select name="day" onChange={handleInput}>
                  <option>DD</option>
                  {dayDataArr.map(day => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <span className="sex">성별</span>

            <div className="sexCheck">
              <div className="femaleCheck">
                <input
                  type="radio"
                  id="female"
                  value="female"
                  name="sex"
                  onClick={handleInput}
                />
                <label for="female" />
                <div>여성</div>
              </div>
              <div className="maleCheck">
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  value="male"
                  onClick={handleInput}
                />
                <label for="male" />
                <div>남성</div>
              </div>
            </div>
          </div>

          <div className="allergy">
            <span className="necessary">알러지 옵션</span>
            {allergyData.map((allergy, idx) => {
              return (
                <div key={idx}>
                  <input
                    type="checkbox"
                    id={allergy.allergy_id}
                    name="allergy"
                    value={allergy.allergy_id}
                    // onChange={handleInput}
                    onClick={selectAllergy}
                  />
                  <label for={allergy.allergy_id} />
                  {allergy.allergy_name}
                </div>
              );
            })}
          </div>

          <button
            // className={
            //   emailVaildCheck && passwordVaildCheck2
            //     ? 'signUpButton'
            //     : 'failure'
            // }
            // disabled={emailVaildCheck || passwordVaildCheck2}
            onClick={signUpCheck}
          >
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
