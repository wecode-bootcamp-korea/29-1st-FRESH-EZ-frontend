import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Cart.scss';

function Cart() {
  return (
    <>
      <Nav />
      <div className="margin" />
      <div className="cartcart">
        <div className="texttext">
          <span>{window.sessionStorage.getItem('selectedData')}</span>
        </div>
        <img
          className="imgimg"
          alt="cartImg"
          src="/images/Cart/cartBackgroundImg.jpg"
        />
      </div>
      <Footer />
    </>
  );
}

export default Cart;
