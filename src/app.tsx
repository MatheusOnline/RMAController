import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import RegistrationLabel from "./container/registrationLabel"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/leitor" element={<RegistrationLabel />} />
      </Routes>
    </Router>
  );
}

export default App;
