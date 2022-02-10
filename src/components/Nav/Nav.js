import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [allCateMode, setAllCateMode] = useState(false);
  const [firstCateMode, setfirstCateMode] = useState(false);
  const [secondCateMode, setSecondCateMode] = useState(false);
  const [thirdCateMode, setThirdCateMode] = useState(false);
  const [liColorChange, setLiColorChange] = useState(false);
  const [liColorChange2, setLiColorChange2] = useState(false);
  const subScriptMenu = [
    { name: '샐러드' },
    { name: '샌드위치' },
    { name: '도시락' },
  ];
  const subSingleMenu = [
    { name: '샐러드' },
    { name: '샌드위치 · 랩' },
    { name: '도시락 · 간편식' },
    { name: '죽 · 스프' },
    { name: '간식' },
    { name: '음료' },
  ];
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
            <Link to="/">회원가입</Link>
          </li>
          <li className="loginBtn">
            <Link to="/">로그인</Link>
          </li>
          <li className="as">
            <Link to="/">1:1 문의</Link>
          </li>
          <li>
            <Link to="/">B2B 신청</Link>
          </li>
        </ul>
      </div>
      <div>
        <div
          className="navSecondLine"

          // onMouseLeave={() => setfirstCateMode(false)}
        >
          <ul className="navSecondLineLeft">
            <ul
              className="allOfMenu"
              onMouseOver={() => setfirstCateMode(true)}
            >
              <i className="fas fa-bars" />
              <li
                onMouseOver={() => {
                  setfirstCateMode(true);
                  setAllCateMode(true);
                }}
              >
                전체 카테고리
              </li>
            </ul>

            <li className="subScriptionMenu">
              <Link to="/">정기구독</Link>
            </li>
            <li className="oneMenuPurchase">
              <Link to="/">단품구매</Link>
            </li>
          </ul>

          <ul className="navSecondLineRight">
            <ul className="searchWrap">
              <i className="fas fa-search" />
              <input type="text" placeholder="검색" />
            </ul>
            <i className="fas fa-shopping-cart" />
            <li className="cart">
              <Link to="/">장바구니</Link>
            </li>
            <i className="fas fa-file-alt" />
            <li>
              <Link to="/">바로주문</Link>
            </li>
          </ul>
        </div>
      </div>
      {allCateMode && (
        <div
          className="menuContainer"
          onMouseLeave={() => setfirstCateMode(false)}
        >
          {firstCateMode && (
            <ul className="menuFirstList">
              <li
                onMouseOver={() => {
                  setSecondCateMode(true);
                }}
                className={liColorChange ? 'color' : 'uncolor'}
              >
                정기구독
              </li>
              <li
                className={liColorChange2 ? 'color' : 'uncolor'}
                onMouseOver={() => setThirdCateMode(true)}
              >
                단품구매
              </li>
            </ul>
          )}
          {secondCateMode && (
            <ul
              className={
                thirdCateMode ? 'hideMenuFirstOfFirst' : 'menuFirstOfFirst'
              }
              onMouseLeave={() => {
                setSecondCateMode(false);
                setLiColorChange(false);
                // setAllCateMode(false);
              }}
              onMouseOver={() => {
                setLiColorChange(true);
              }}
            >
              {subScriptMenu.map((menu, idx) => {
                return (
                  <li key={idx}>
                    <Link to="/">{menu.name}</Link>
                  </li>
                );
              })}
            </ul>
          )}
          {thirdCateMode && (
            <ul
              className="menuFirstOfSecond"
              onMouseLeave={() => {
                setLiColorChange(true);
                // setAllCateMode(false);
              }}
              onMouseOver={() => {
                setLiColorChange2(true);
              }}
            >
              {subSingleMenu.map((single, idx) => {
                return (
                  <li key={idx}>
                    <Link to="/">{single.name}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
