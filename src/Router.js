import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubsOpt from './pages/SubsOpt/SubsOpt';
import SubsDetail from './pages/SubsOpt/SubsDetail';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/subsDetail" element={<SubsDetail />} />
        <Route path="/subsOpt" element={<SubsOpt />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
