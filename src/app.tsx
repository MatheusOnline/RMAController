import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import RegistrationLabel from "./container/registrationLabel"
import ShopeeAuth from "./container/Auth";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/leitor" element={<RegistrationLabel />} />

        <Route path="/auth" element={<ShopeeAuth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
