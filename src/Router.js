import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubsList from './pages/SubsList/SubsList';
import SubsDetails from './pages/SubsDetail/SubsDetail';
import SubsOpt from './pages/SubsOpt/SubsOpt';
import SubsDetail from './pages/SubsOpt/SubsDetail';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/subsList" element={<SubsList />} />
        <Route path="/subsDetails" element={<SubsDetails />} />
        <Route path="/subsOpt" element={<SubsOpt />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
