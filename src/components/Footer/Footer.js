import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="align">
      <div className="footer">
        <div className="footerFirst">
          <img src="/images/Logo.png" alt="잠시만 기다려주세요" />
          <div className="footerFirstRight">
            <a href="/" target="_blank">
              FAQ
            </a>
            <Link to="/" className="contract">
              이용약관
            </Link>
            <Link to="/" className="contract">
              개인정보처리방침
            </Link>
            <a href="/" target="_blank">
              제휴문의
            </a>
            <a href="/" target="_blank">
              채용문의
            </a>
            <a href="/" target="_blank">
              케이터링 문의
            </a>
          </div>
        </div>

        <h3>프이고객센터</h3>

        <div className="footerSecond">
          <div className="questionBtn">
            <button>1:1 문의하기</button>
          </div>
          <div className="questionSchedule">
            <div className="questionScheduleFirst">
              <p>
                <span>평일</span>
                <span>9:00 - 18:00 (점심시간 13:00 - 14:00)</span>
              </p>
              <p>
                <span>공휴일</span>
                <span>휴무</span>
              </p>
            </div>
            <div className="questionScheduleSecond">
              <p>
                <span>토요일</span>
                <span>9:00 - 13:00 (홈페이지 채팅문의만 운영)</span>
              </p>
              <p>
                <span>고객센터</span>
                <span>1644-4559</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footerThird">
          <div className="footerThirdFirst">
            <div>
              <span>대표</span>
              <span>Fresh-EZ</span>
            </div>
            <div>
              <span>주소</span>
              <span>서울특별시 강남구 테헤란로 427 위워크타워 8층</span>
            </div>
            <div>
              <span>사업자등록번호</span>
              <span>123-45-6789</span>
            </div>
            <div>
              <span>통신판매업신고</span>
              <span>제 2022-서울강남-00001</span>
            </div>
          </div>

          <div className="footerThirdSecond">
            <div>
              <span>제휴문의</span>
              <span>biz@freshez.me</span>
            </div>
            <div>
              <span>카카오ID</span>

              <a href="/" target="_blank">
                @프레시이지-freshez
              </a>
            </div>
            <div>
              <span>단체주문문의</span>
              <span>order@freshez.me</span>
            </div>
          </div>
        </div>
        <div className="footerFourth">
          <div>
            ⓒ 2022. Fresh-EZ, Inc. All Rights Reserved <br />
            프레시이지가 제공하는 UI/UX, 프로그램, 콘텐츠, 디자인 등은 특허법,
            저작권법, 부정경쟁방지법 등에 의해 보호 받고 있습니다.
            <br />
            무단 복제, 유사한 변형, 사용 등에 대하여는 법적 책임이 있음을
            알려드립니다.
          </div>
          <div className="footerFourthIcon">
            <i class="fab fa-instagram" />
            <i class="fab fa-facebook-f" />
            <i class="fab fa-youtube" />
            <i class="fas fa-blog" />
            <i class="fas fa-plus-square" />
            <i class="fas fa-comment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
