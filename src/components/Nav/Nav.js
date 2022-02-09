import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.scss';
import FirstCategory from './FirstCategory';

const Nav = () => {
  const [firstCateMode, setfirstCateMode] = useState(false);

  return (
    <div className="nav">
      <div className="navFirstLine">
        <Link to="/main">
          <img
            className="navFirstLeft"
            src="/images/Logo.png"
            alt="잠시만 기다려주세요"
          />
        </Link>

        <ul className="navFirstLineRight">
          <li className="signUpBtn">
            <NavLink className="themeColor" to="/">
              회원가입
            </NavLink>
          </li>
          <li className="loginBtn">
            <NavLink className="fontGray" to="/">
              로그인
            </NavLink>
          </li>
          <li className="as">
            <NavLink className="fontGray" to="/">
              1:1 문의
            </NavLink>
          </li>
          <li>
            <NavLink className="fontGray" to="/">
              B2B 신청
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div className="navSecondLine">
          <ul className="navSecondLineLeft">
            <ul className="allOfMenu">
              <i className="fas fa-bars" />
              <li
                // className={`menuOpen${mode}`}
                onMouseOver={() => setfirstCateMode(true)}
                onMouseLeave={() => setfirstCateMode(false)}
              >
                {/* <li
                className={`menuOpen${mode}`}
                onMouseOver={() => setMode('Reveal')}
                onMouseLeave={() => setMode('Disapper')}
              > */}
                전체 카테고리
              </li>
              {/* 마우스를 올리면 해당 카테고리의 백그라운드 색상도 변해야하고 하위
              카테고리 목록도 떠야함. */}
            </ul>

            <li className="subScriptionMenu">
              <NavLink className="fontGray" to="/">
                정기구독
              </NavLink>
            </li>
            <li className="oneMenuPurchase">
              <NavLink className="fontGray" to="/">
                단품구매
              </NavLink>
            </li>
          </ul>

          <ul className="navSecondLineRight">
            <ul className="searchWrap">
              <i className="fas fa-search" />
              <input type="text" placeholder="검색" />
            </ul>
            <i className="fas fa-shopping-cart" />
            <li className="cart">
              <NavLink className="fontGray" to="/" activeClassName="active">
                장바구니
              </NavLink>
            </li>
            <i className="fas fa-file-alt" />
            <li>
              <NavLink className="fontGray" to="/">
                바로주문
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="menuContainer"
        onMouseOver={() => setfirstCateMode(true)}
        onMouseLeave={() => setfirstCateMode(false)}
      >
        {firstCateMode && (
          <ul
            className="menuFirstList"
            // onMouseOver={() => setfirstCateMode(true)}
            // onMouseLeave={() => setfirstCateMode(false)}
          >
            <li>정기구독</li>
            <li>단품구매</li>
          </ul>
        )}
        <ul
          className="menuFirstOfFirst"
          onMouseOver={() => setfirstCateMode(true)}
          onMouseLeave={() => setfirstCateMode(false)}
        >
          <li>
            <Link to="/">샐러드</Link>
          </li>
          <li>
            <Link to="/">샌드위치</Link>
          </li>
          <li>
            <Link to="/">도시락</Link>
          </li>
        </ul>

        <ul className="menuFirstOfSecond">
          <li>
            <Link to="/">샐러드</Link>
          </li>
          <li>
            <Link to="/">샌드위치 · 랩</Link>
          </li>
          <li>
            <Link to="/">도시락 · 간편식</Link>
          </li>
          <li>
            <Link to="/">죽 · 스프</Link>
          </li>
          <li>
            <Link to="/">간식</Link>
          </li>
          <li>
            <Link to="/">음료</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
