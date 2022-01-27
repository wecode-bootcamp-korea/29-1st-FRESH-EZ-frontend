import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductAll from './pages/ProductList/ProductAll';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/productAll" element={<ProductAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
