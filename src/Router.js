import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubsDetail from './pages/SubsDetail/SubsDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/subsDetail" element={<SubsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
