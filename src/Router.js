import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubsDetails from './pages/SubsDetail/SubsDetail';
import SubsOpt from './pages/SubsOpt/SubsOpt';
import SubsDetail from './pages/SubsOpt/SubsDetail';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import SubsSelect from './pages/SubsSelect/SubsSelect';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/subsDetails/:id" element={<SubsDetails />} />
        <Route path="/subsOpt" element={<SubsOpt />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/subsSelect" element={<SubsSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
