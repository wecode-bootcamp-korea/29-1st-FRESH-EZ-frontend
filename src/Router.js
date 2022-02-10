import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductAll from './pages/ProductList/ProductAll';
import Details from './pages/Details/Details';
import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import PreSignUp from './pages/SignUp/PreSignUp';
import SubsList from './pages/SubsList/SubsList';
import SubsDetails from './pages/SubsDetail/SubsDetail';
import SubsOpt from './pages/SubsOpt/SubsOpt';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import SubsSelect from './pages/SubsSelect/SubsSelect';
import Login from './pages/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<ProductAll />} />
        <Route path="/products/detail/:id" element={<Details />} />
        <Route path="/subsDetails/:id" element={<SubsDetails />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/preSignUp" element={<PreSignUp />} />
        <Route path="/subsList" element={<SubsList />} />
        <Route path="/subsDetails" element={<SubsDetails />} />
        <Route path="/subsOpt" element={<SubsOpt />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/subsSelect" element={<SubsSelect />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
