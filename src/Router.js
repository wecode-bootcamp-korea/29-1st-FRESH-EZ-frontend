import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubsOpt from './pages/SubsOpt/SubsOpt';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/subsOpt" element={<SubsOpt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
