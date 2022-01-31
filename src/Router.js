import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
<<<<<<< HEAD
import SignUp from './pages/SignUp/SignUp';
=======
import Nav from './components/Nav/Nav';
>>>>>>> master

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
<<<<<<< HEAD
        <Route path="/signUp" element={<SignUp />} />
=======
        <Route path="/nav" element={<Nav />} />
>>>>>>> master
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
