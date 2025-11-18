import { Routes, Route } from "react-router-dom";

import Home from "./container/Home";
import QrReader from "./container/ScanerPage";
import ShopeeAuth from "./container/ConnectShopPage";
import Return from "./container/ReturnPage";
import DetailPage from "./container/DetailPage";
import Dashboard from "./container/DashboardPage";
function Teste() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/scanner" element={<QrReader />} />
      <Route path="/auth" element={<ShopeeAuth />} />
      <Route path="/returns" element={<Return />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      {/* ❗Seu detail está errado — "?" não pode no path */}
      <Route path="/return/detail" element={<DetailPage />} />
    </Routes>
  );
}

export default Teste;
