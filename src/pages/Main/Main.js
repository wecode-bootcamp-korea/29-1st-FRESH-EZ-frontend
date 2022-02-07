import React from 'react';
import Nav from '../../components/Nav/Nav';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Nav />

      <div className="container">
        <button className="leftBtn" />
        <button className="rightBtn" />

        <div className="img1">
          <img
            src="https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="잠시만 기다려주세요"
          />
        </div>

        <div className="img2">
          <img
            src="https://images.unsplash.com/photo-1643747494952-6d70ab0cb511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt="잠시만 기다려주세요"
          />
        </div>
        <div className="img3">
          <img
            src="https://images.unsplash.com/photo-1643755027544-eee0a8690ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="잠시만 기다려주세요"
          />
        </div>

        <div className="img4">
          <img
            src="https://images.unsplash.com/photo-1643754713080-cbfc5be44520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="잠시만 기다려주세요"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
