import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState('');

  const subMenu = {
    subScript: ['샐러드', '샌드위치', '도시락'],
    single: [
      '샐러드',
      '샌드위치 · 랩',
      '도시락 · 간편식',
      '죽 · 스프',
      '간식',
      '음료',
    ],
  };

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
            <Link to="/preSignUp">회원가입</Link>
          </li>
          <li className="loginBtn">
            <Link to="/login">로그인</Link>
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
        <div className="navSecondLine">
          <ul className="navSecondLineLeft">
            <ul
              className="allOfMenu"
              onMouseLeave={() => {
                setShowSubMenu('');
              }}
            >
              <i className="fas fa-bars" />
              <li
                onMouseOver={() => {
                  setShowMenu(true);
                }}
              >
                전체 카테고리
              </li>
              {showMenu && (
                <ul
                  className="twoMenu"
                  onMouseLeave={() => {
                    setShowMenu(false);
                  }}
                >
                  <li
                    onMouseOver={() => setShowSubMenu('subScript')}
                    className="subScription"
                  >
                    정기구독
                  </li>

                  <li
                    className="single"
                    onMouseOver={() => setShowSubMenu('single')}
                  >
                    단품구매
                  </li>

                  {showSubMenu && (
                    <div className="menuBox">
                      <ul>
                        {subMenu[showSubMenu].map(menu => (
                          <li key={menu + 1} className="singleMenu">
                            <Link to="">{menu}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </ul>
              )}
            </ul>

            <li className="subScriptionMenu">
              <Link to="/subsList">정기구독</Link>
            </li>
            <li className="oneMenuPurchase">
              <Link to="/products">단품구매</Link>
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
    </div>
  );
};

export default Nav;
