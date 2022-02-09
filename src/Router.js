import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import PreSignUp from './pages/SignUp/PreSignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/preSignUp" element={<PreSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
