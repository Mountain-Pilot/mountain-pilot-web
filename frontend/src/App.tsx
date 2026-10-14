import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';
import PaymentScreen from './Payment/Payment';
import Fulfillment from './Fulfillment/Fulfillment';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <header style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/fulfillment">Fulfillment</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/fulfillment" element={<Fulfillment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;