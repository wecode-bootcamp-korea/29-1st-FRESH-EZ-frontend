import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navFirstLine">
        <img className="navFirstLeft" src="/images/Logo.png" />
        {/* 이게 누르면 메인페이지 가게끔 링크 걸기 */}
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
              <li>전체 카테고리</li>
              {/* 이거 누르면 상품목록(카테고리) 떠야함 */}
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
              <i className="fas fa-search"></i>
              <input type="text" placeholder="검색" />
            </ul>
            <i className="fas fa-shopping-cart"></i>
            <li className="cart">
              <NavLink className="fontGray" to="/" activeClassName="active">
                장바구니
              </NavLink>
            </li>
            <i className="fas fa-file-alt"></i>
            <li>
              <NavLink className="fontGray" to="/">
                바로주문
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
{
  /* <ul className="menuFirstList">
              <li>정기구독</li>
              <li>단품구매</li>
            </ul>
            <ul className="menuSecondList">
              <li>
                <NavLink to="/" activeClassName="active">
                  샐러드
                </NavLink>
              </li>
              <li>
                <NavLink to="/">샌드위치 · 랩</NavLink>
              </li>
              <li>
                <NavLink to="/">도시락 · 간편식</NavLink>
              </li>
              <li>
                <NavLink to="/">죽 · 스프</NavLink>
              </li>
              <li>
                <NavLink to="/">간식</NavLink>
              </li>
              <li>
                <NavLink to="/">음료</NavLink>
              </li>
            </ul> */
}
export default Nav;
