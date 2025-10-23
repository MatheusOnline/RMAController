import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import RegistrationLabel from "./container/registrationLabel"
import ShopeeAuth from "./container/Auth";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/leitor" element={<RegistrationLabel />} />

        <Route path="/auth?" element={<ShopeeAuth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
