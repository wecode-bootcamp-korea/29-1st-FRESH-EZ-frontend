import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../ProductList/components/ProductCard';

import SelectedProduct from './SelectedProduct';
import ADDITIONS_LIST from './additionalOptions';
import AdditionalOptionList from './AdditionalOptionList';
import SelectionOptionList from './SelectionOptionList/SelectionOptionList';
import SuggestionsWrap from './SuggestionsWrap';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Details.scss';

function Details() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  const [selectedProduct, setSelectedProduct] = useState({});
  const [sizeState, setSizeState] = useState('Medium');
  const [selectedMDProd, setSelectedMDProd] = useState([]);
  const [productCount, setProductCount] = useState(1);
  const [recommendProducts, setRecommendProducts] = useState({ recommend: [] });

  // const [checkboxChecked, setCheckboxChecked] = useState(false);
  // const [isCheckedfromData, setIsCheckedfromData] = useState(ADDITIONS_LIST);

  const sizeInfo = [{ Medium: 0 }, { Large: 1000 }];

  const calcTotalPrice = () => {
    if (selectedProduct.message) {
      const reducer = (preValue, curValue) => preValue + curValue;
      const MDPriceArray = selectedMDProd.map(MDprod => MDprod.price);
      const MDPrice =
        MDPriceArray.length > 0 ? MDPriceArray.reduce(reducer) : 0;

      const productsPrice =
        (selectedProduct.price + (sizeState === 'Large' ? 1000 : 0)) *
        productCount;

      return productsPrice + MDPrice;
    }
  };

  const selectSize = e => setSizeState(e.target.value);

  const selectMDProd = e => {
    if (e.target.checked) {
      const { name, size, price } = ADDITIONS_LIST[e.target.name];

      setSelectedMDProd(prev => [
        { name: name, size: size, price: price },
        ...prev,
      ]);
    } else {
      setSelectedMDProd(
        selectedMDProd.filter(data => data.name !== e.target.value)
      );
    }
  };

  // const handleChecked = e => {
  //   if (e.target.checked) {
  //     setIsCheckedfromData(prev => [
  //       ...prev,
  //       { ...prev[e.target.name], isChecked: !e.target.checked },
  //     ]);
  //   }
  // };

  // const checkAndPrice = () => {
  //   selectMDProd();
  //   handleChecked();
  // };

  useEffect(() => {
    fetch(`http://208.82.62.99:8000/product/product-detail/${params.id}`)
      .then(res => res.json())
      .then(res => {
        setSelectedProduct(res);
      });
  }, []);

  useEffect(() => {
    fetch(`http://54.165.180.52:8000/product/menu?catgory=1&offset=0&limit=4`)
      .then(res => res.json())
      .then(products => {
        setRecommendProducts(prev => ({
          ...prev,
          recommend: products.products_list,
        }));
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="Details">
        <div className="menuBody">
          <div className="menuHeader">
            <picture className="picture">
              <img alt="productImage" src={selectedProduct.title_image_url} />
            </picture>

            <div className="menuInfo">
              <div className="menuData">
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.small_desc}</p>
                <p className="price">
                  {selectedProduct.price > 0 &&
                    selectedProduct.price.toLocaleString()}
                  원
                </p>
              </div>

              <div className="productExplanation">
                <h3>상품설명</h3>
                <div>
                  <p>{selectedProduct.desc}</p>
                </div>
              </div>

              <SelectionOptionList
                className="first"
                productCount={productCount}
                setProductCount={setProductCount}
                selectSize={selectSize}
                sizeInfo={sizeInfo}
                selectMDProd={selectMDProd}
                selectedProduct={selectedProduct}
                sizeState={sizeState}
                selectedMDProd={selectedMDProd}
                // handleChecked={handleChecked}
                calcTotalPrice={calcTotalPrice}
                // isCheckedfromData={isCheckedfromData}
                // checkUpdate={checkUpdate}
              />

              <div className="productPrice">
                <p>상품 금액</p>
                <p>
                  <span>
                    {selectedProduct.message &&
                      `${calcTotalPrice().toLocaleString()}원`}
                  </span>
                </p>
              </div>

              <div className="makeAnOrder">
                <button className="buttonBasket">장바구니 담기</button>
                <button className="buttonOrder">주문하기</button>
              </div>
            </div>
          </div>

          <article className="productRecommendation">
            <div className="recommendationTitle">
              <img alt="favicon" src="/images/favicon.png" />
              <h2>다른 고객들이 함께 본 상품</h2>
            </div>

            <ul className="recommendationList">
              {recommendProducts.recommend &&
                recommendProducts.recommend.map(list => {
                  return <SuggestionsWrap list={list} />;
                })}
            </ul>
          </article>

          <div className="productInformation">
            <div>
              <img
                alt="singleDescriptionSalad"
                src="/images/Details/SingleDescriptionSalad.jpg"
              />
            </div>

            <div className="selectionModalSticky">
              <div className="menuName">
                <h3>상품선택</h3>
                <h2>{selectedProduct.name}</h2>
              </div>

              <SelectionOptionList
                className="second"
                productCount={productCount}
                setProductCount={setProductCount}
                selectSize={selectSize}
                sizeInfo={sizeInfo}
                selectMDProd={selectMDProd}
                selectedProduct={selectedProduct}
                sizeState={sizeState}
                selectedMDProd={selectedMDProd}
                // handleChecked={handleChecked}
                // isCheckedfromData={isCheckedfromData}
                // checkboxChecked={checkboxChecked}
                // checkUpdate={checkUpdate}
              />

              <div className="productPrice">
                <h3>상품 금액</h3>
                <p>
                  <h2>
                    {selectedProduct.message &&
                      `${calcTotalPrice().toLocaleString()}원`}
                  </h2>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
