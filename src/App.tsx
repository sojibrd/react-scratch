import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CustomerService,
  GiftCards,
  Home,
  PrimeVideo,
  Registry,
  Sell,
  TodaysDeals,
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
          <Route path="/todays-deals" element={<TodaysDeals />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/prime-video" element={<PrimeVideo />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/sell" element={<Sell />} />
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
