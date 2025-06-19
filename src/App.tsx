import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BestSellers from "./pages/BestSellers";
import Mobiles from "./pages/Mobiles";
import Fashion from "./pages/Fashion";
import Electronics from "./pages/Electronics";
import Prime from "./pages/Prime";
import HomeKitchen from "./pages/HomeKitchen";
import AmazonPay from "./pages/AmazonPay";
import AmazonNavbar from "./components/common/navbar/AmazonNavbar";

function App() {
  return (
    <Router>
      <AmazonNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/prime" element={<Prime />} />
        <Route path="/home-kitchen" element={<HomeKitchen />} />
        <Route path="/amazon-pay" element={<AmazonPay />} />
      </Routes>
    </Router>
  );
}

export default App;
