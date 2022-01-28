import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductAll from './pages/ProductList/ProductAll';
import ProductSalad from './pages/ProductList/ProductSalad';
import ProductSandwich from './pages/ProductList/ProductSandwich';
import ProductBento from './pages/ProductList/ProductBento';
import ProductSoup from './pages/ProductList/ProductSoup';
import ProductSnack from './pages/ProductList/ProductSnack';
import ProductDrink from './pages/ProductList/ProductDrink';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/productAll" element={<ProductAll />} />
        <Route path="/productSalad" element={<ProductSalad />} />
        <Route path="/productSandwich" element={<ProductSandwich />} />
        <Route path="/productBento" element={<ProductBento />} />
        <Route path="/productSoup" element={<ProductSoup />} />
        <Route path="/productSnack" element={<ProductSnack />} />
        <Route path="/productDrink" element={<ProductDrink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
