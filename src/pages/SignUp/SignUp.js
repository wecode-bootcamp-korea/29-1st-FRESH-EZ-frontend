import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../src/components/Nav/Nav';
import './SignUp.scss';

// presignup page scss가 망가졌는데 머지하면 괜찮지 않을까해서 안고쳤는데 어떻게 생각하시는지..?

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

  const [allergyData, setAllergyData] = useState([]);

  useEffect(() => {
    fetch('http://208.82.62.99:8000/user/allergy')
      .then(res => res.json())
      .then(res => {
        setAllergyData(res.allergies_list);
        // setAllergyData(prev => [res.allergies_list, ...prev]);
      });
  }, []);
  // get일때는 주소만 적으면 됌

  const [rePwCheck, setRePwCheck] = useState('');
  const handleInput2 = e => {
    setRePwCheck(e.target.value);
  };
  // 위아래 함수 합쳐서 온체인지 하나에만 넣거나 온블러 하나에만 넣거나 하면 입력자체가 안됨
  // 따로 분리해서 해야함

  const checkError = () => {
    if (password !== rePwCheck) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
    }
  };

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

  const handleInput = e => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const handleAllergy = e => {
    // inputs.allergy 배열에 e.target.value 추가하고 싶어
    setInputs(prev => ({
      allergy: [...prev.allergy, e.target.value],
    }));
  };

  const emailVaildCheck = email.includesincludes('@') && email.includes('.com');
  const passwordVaildCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  passwordVaildCheck.test(password);

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
  console.log(inputs);
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
        }),
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
                value={rePwCheck}
                onChange={handleInput2}
                onBlur={checkError}
                // 새로배움
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
                  value="male"
                  // 다른것처럼 중괄호 넣어서 했는데 안됐음 근데 따옴표 넣으니까 됐음
                  // 추측하건데 변하지 않는 값이니까 스트링으로 해줘서 되었던 건지 궁금
                  onClick={handleInput}
                  // onclick, onChange 둘 다 가능인데 왜?
                  // 둘 다 가능하다면 뭘 쓰는게 더 맞는 건지
                  // value={sex}
                  // onClick={handleInput}
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
                  {/* key값은 가장 바깥 태그에다가 써야함 */}
                  <input
                    type="checkbox"
                    id={allergy.allergy_id}
                    name="allergy"
                    value={allergy.allergy_id}
                    onChange={handleAllergy}
                  />
                  <label for={allergy.allergy_id} />
                  {allergy.allergy_name}
                </div>
              );
            })}

            {/* <div>
              <input type="checkbox" id="allergyCheck1" />
              <label for="allergyCheck1" />
              대두 (두유, 두부 등)
            </div> */}
            {/* <div>
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
            </div> */}

            {/* 맵돌려라.. */}
          </div>

          <button
            className={
              emailVaildCheck && passwordVaildCheck ? 'signUpButton' : 'failure'
            }
            onClick={signUpCheck}
            disabled={emailVaildCheck || passwordVaildCheck}
          >
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
