// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Overview from './pages/Farmer/Overview';
import Orders from './pages/Farmer/Orders';
import Products from './pages/Farmer/Products';
import FarmerLayout from './pages/Farmer/FarmerLayout';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route
          path="/farmer/*"
          element={
            <FarmerLayout>
              <Routes>
                <Route path="overview" element={<Overview />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
              </Routes>
            </FarmerLayout>
          }
        />


        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
