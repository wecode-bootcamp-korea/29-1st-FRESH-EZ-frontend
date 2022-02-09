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
import Details from './pages/Details/Details';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<ProductAll />} />
        <Route path="/products/salad" element={<ProductSalad />} />
        <Route path="/products/sandwich" element={<ProductSandwich />} />
        <Route path="/products/bento" element={<ProductBento />} />
        <Route path="/products/soup" element={<ProductSoup />} />
        <Route path="/products/snack" element={<ProductSnack />} />
        <Route path="/products/drink" element={<ProductDrink />} />
        <Route path="/products/detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
