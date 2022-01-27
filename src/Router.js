import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details/Details';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
