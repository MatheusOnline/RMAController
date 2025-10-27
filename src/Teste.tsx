import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import RegistrationLabel from "./container/registrationLabel"
import ShopeeAuth from "./container/Auth";
import Return from "./container/Return";

function Teste() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/leitor" element={<RegistrationLabel />} />

        <Route path="/auth" element={<ShopeeAuth/>}/>
        <Route path="/return" element={<Return/>}/>
      </Routes>
    </Router>
  );
}

export default Teste;
