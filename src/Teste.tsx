import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import QrReader from "./container/ScanerPage";
import ShopeeAuth from "./container/Auth";
import Return from "./container/ReturnPage";
import DetailPage from "./container/DetailPage";
function Teste() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/leitor" element={<QrReader />} />

        <Route path="/auth" element={<ShopeeAuth/>}/>
        <Route path="/return" element={<Return/>}/>
        <Route path="/return/detail?" element={<DetailPage/>}/>
      </Routes>
    </Router>
  );
}

export default Teste;
