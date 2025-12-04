import { Routes, Route } from "react-router-dom";

import Home from "./container/Home";

import ShopeeAuth from "./container/ConnectShopPage";
import Return from "./container/ReturnPage";
import DetailPage from "./container/DetailPage";
import Dashboard from "./container/DashboardPage";
import LoginPage from "./container/LoginPage";

import LoginVerify from "./utils/loginVeify";

import ProtectedLayout from "./layouts/ProtectedLayout";
function Teste() {
  return (
    <Routes > 
      <Route element={<LoginVerify />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Home />} />
           
            <Route path="/auth" element={<ShopeeAuth />} />
            <Route path="/returns" element={<Return />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/return/detail" element={<DetailPage />} />
          </Route>
      </Route>

      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default Teste;
