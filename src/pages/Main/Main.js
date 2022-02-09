import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import './Main.scss';

function Main() {
  const imageLists = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1643747494952-6d70ab0cb511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1643755027544-eee0a8690ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1643754713080-cbfc5be44520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
  ];
  const [xValue, setXValue] = useState(0);

  const goLeft = () => {
    if (xValue < 0) {
      setXValue(prev => prev + 100);
    }
  };
  const goRight = () => {
    if (xValue > -(100 * (imageLists.length - 1))) {
      setXValue(prev => prev - 100);
    }
  };

  return (
    <div className="main">
      <Nav />

      <div
        className="container"
        style={{ transform: `translatex(${xValue}vw)` }}
      >
        {imageLists.map(img => {
          return (
            <div className="img" key={img.id}>
              <img src={img.img} alt="잠시만 기다려주세요" />
            </div>
          );
        })}
      </div>
      <div className="btnContainer">
        <i className="fas fa-angle-left" onClick={goLeft} />
        <i className="fas fa-angle-right" onClick={goRight} />
      </div>
    </div>
  );
}

export default Main;
