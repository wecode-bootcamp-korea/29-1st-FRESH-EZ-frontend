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

  const emailVaildCheck = email.includes('@') && email.includes('.com');
  const passwordVaildCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordVaildCheck2 =
    passwordVaildCheck.test(password) && passwordVaildCheck.test(rePwCheck);

  const goPwCheck = () => {
    if (passwordVaildCheck.test(password) === false) {
      alert('비밀번호 조건에 맞춰 다시 작성해주세요.');
    } else if (password === 0) {
      alert('값이 입력되지 않았습니다. 다시 입력해주세요:)');
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
    } else if (password === 0) {
      alert('값이 입려되지 않았습니다. 다시 입력해주세요:)');
    }
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleRePwInput = e => {
    setRePwCheck(e.target.value);
  };

  const selectAllergy = e => {
    if (e.target.checked) {
      // e를 콘솔찍어보면 엄청난 항목의 값을 전달해주는데 그중에서 체크박스 타입에서의 밸류는 checked 속성으로
      // 불리언 타입으로 정해지기 떄문에 그 수많은 밸류 항목들 중에 checked의 값을 알기 위해 e.target.checked한거임.
      // e.target은 수많은 이벤트의 항목중에 타겟을 정하는 것. 예를 들어서 input이 타겟이 되는 거임.
      // 수많은 이벤트 항목죽에 input이라는 타겟을 정하는 것. 그 타겟에 있는 value가 알고 싶다고 하면 value값을 정의해줘서
      // 그 값을 넘겨주는 것이 바로 e.target.value
      // e 가지고 콘솔 많이 찍어보기
      setInputs(prev => ({
        ...prev,
        allergy: [...prev.allergy, e.target.value],
        // prev는 !함수안에서! prev를 쓰는데 함수를 실행되는 순간의&현재의 state 값을 참조하는 것. prev=>로 참조하면서
        // (...prev)할 떄 비로소 진짜 값이 되 느낌.(...는 값을 복제하는 거니까)
        // input으로 값을 할당하는 거는 변수에 지정해주는 느낌? 여기에 뭐가 들어감. 약간 이런 느낌. 지정해주는 느낌.
        // 둘 다ㅏ 써도 작동 잘하는데... 흠...?
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        allergy: prev.allergy.filter(data => data !== e.target.value),
        // filter(조건)은 조건을 남기는 함수 그래도 잘 모르니까 공부하기
      }));
    }
  };

  const emailDuplicateCheck = () => {
    if (!email.includes('@')) {
      alert('@가 포함되지 않았습니다. 다시 입력해주세요:)');
    } else if (!email.includes('.com')) {
      alert('.com이 포함되지 않았습니다. 다시 입력해주세요:)');
    } else if (email === 0) {
      alert('값이 입력되지 않았습니다. 다시 입력해주세요:)');
    } else {
      fetch('http://208.82.62.99:8000/user/duplication', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'Duplicate (email)') {
            alert('가입 되어있는 이메일 입니다.');
          } else {
            alert('사용가능한 이메일 입니다.');
          }
        });
    }
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
        allergy_ids: allergy,
        // 보내는 데이터는 백엔드의 키값,밸류값 맞춰야함
      }),
    })
      .then(res => res.json())
      .then(res => {
        navigate('/main');
      });
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
                  // 콘솔 찍어보다가 onKeyUp 적용해봤는데 입력조차도 안되서 .. 이론은 완벽한데 왜안되는지..?
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
            <span>알러지 옵션</span>
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
            className="signUpButton"
            disabled={!emailVaildCheck || !passwordVaildCheck2}
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
