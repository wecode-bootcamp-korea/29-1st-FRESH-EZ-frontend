import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ProductAll from './ProductAll';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

function Main() {
  const imageLists = [
    {
      id: 1,
      img: 'images/Main/mainbanner1.png',
    },
    {
      id: 2,
      img: 'images/Main/mainbanner2.png',
    },
    {
      id: 3,
      img: 'images/Main/mainbanner3.png',
    },
    {
      id: 4,
      img: 'images/Main/mainbanner4.png',
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
    <>
      <div className="main">
        <Nav />

        <div
          className="container"
          style={{ transform: `translatex(${xValue}vw)` }}
        >
          {imageLists.map(img => {
            return (
              <div className="img" key={img.id}>
                <Link to="/products">
                  <img src={img.img} alt="잠시만 기다려주세요" />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="btnContainer">
          <i className="fas fa-angle-left" onClick={goLeft} />
          <i className="fas fa-angle-right" onClick={goRight} />
        </div>
      </div>
      <ProductAll />
      <Footer />
    </>
  );
}

export default Main;
