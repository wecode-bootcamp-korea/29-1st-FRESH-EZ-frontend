import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerFirst">
        <img src="public/images/Logo.png" alt="잠시만 기다려주세요" />
        <div className="footerFirstRight">
          <p>FAQ</p>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>제휴문의</p>
          <p>채용문의</p>
          <p>케이터링 문의</p>
        </div>
      </div>

      <p className="asTitle">프코고객센터</p>

      <div className="footerSecond">
        <div className="questionBtn">
          <button>1:1 문의하기</button>
        </div>
        <div className="">
          <div>
            <span>평일</span>
            <span>9:00 - 18:00 (점심시간 13:00 - 14:00)</span>
            <span>공휴일</span>
            <span>휴무</span>
          </div>
          <div>
            <span>토요일</span>
            <span>9:00 - 13:00 (홈페이지 채팅문의만 운영)</span>
            <span>고객센터</span>
            <span>1644-4559</span>
          </div>
        </div>
      </div>

      <div className="footerThird">
        <div>
          <div>
            <span>대표</span>
            <span>정유석</span>
          </div>
          <div>
            <span>주소</span>
            <span>
              서울특별시 성동구 왕십리로 115, 헤이그라운드 서울숲점 7층
            </span>
          </div>
          <div>
            <span>사업자등록번호</span>
            <span>883-81-00307</span>
          </div>
          <div>
            <span>통신판매업신고</span>
            <span>제 2016-서울용산-00657</span>
          </div>
        </div>
        <div>
          <div>
            <span>제휴문의</span>
            <span>biz@freshcode.me</span>
          </div>
          <div>
            <span>카카오ID</span>
            <span>@프레시코드-freshcode</span>
          </div>
          <div>
            <span>단체주문문의</span>
            <span>order@freshcode.me</span>
          </div>
        </div>
      </div>
      <div className="footerFourth">
        <div>
          ⓒ 2022. Fresh-EZ, Inc. All Rights Reserved 프레시이지가 제공하는
          UI/UX, 프로그램, 콘텐츠, 디자인 등은 특허법, 저작권법, 부정경쟁방지법
          등에 의해 보호 받고 있습니다. 무단 복제, 유사한 변형, 사용 등에
          대하여는 법적 책임이 있음을 알려드립니다.
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
  );
};

export default Footer;
