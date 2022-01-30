import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubsList from './pages/SubsList/SubsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/subsList" element={<SubsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
