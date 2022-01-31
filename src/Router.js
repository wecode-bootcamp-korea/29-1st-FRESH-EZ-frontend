import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
