import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  BestSellers,
  Mobiles,
  Fashion,
  Electronics,
  Prime,
  HomeKitchen,
  AmazonPay,
} from "./pages";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/prime" element={<Prime />} />
          <Route path="/home-kitchen" element={<HomeKitchen />} />
          <Route path="/amazon-pay" element={<AmazonPay />} />
        </Route>
        {/* Example admin and auth routes: */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<div>Admin content here</div>} />
        </Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<div>Login form here</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
