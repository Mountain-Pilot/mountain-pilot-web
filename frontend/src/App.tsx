import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <header style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;