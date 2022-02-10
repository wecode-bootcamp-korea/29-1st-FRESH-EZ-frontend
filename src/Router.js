import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details/Details';
import Main from './pages/Main/Main';
import ProductAll from './pages/ProductList/ProductAll';
import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import PreSignUp from './pages/SignUp/PreSignUp';
import SubsList from './pages/SubsList/SubsList';
import SubsDetails from './pages/SubsDetail/SubsDetail';
import SubsOpt from './pages/SubsOpt/SubsOpt';
import Footer from './components/Footer/Footer';
import SubsSelect from './pages/SubsSelect/SubsSelect';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<ProductAll />} />
        <Route path="/products/detail/:id" element={<Details />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/preSignUp" element={<PreSignUp />} />
        <Route path="/subsList" element={<SubsList />} />
        <Route path="/subsDetails/:id" element={<SubsDetails />} />
        <Route path="/subsOpt" element={<SubsOpt />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/subsSelect" element={<SubsSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
