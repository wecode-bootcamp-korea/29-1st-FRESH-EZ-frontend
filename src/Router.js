import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubsOpt from './pages/SubsOpt/SubsOpt';
import SubsDetail from './pages/SubsOpt/SubsDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/subsDetail" element={<SubsDetail />} />
        <Route path="/subsOpt" element={<SubsOpt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
