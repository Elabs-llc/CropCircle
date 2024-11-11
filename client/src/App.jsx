import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Overview from './pages/Farmer/Overview';
import Orders from './pages/Farmer/Orders';
import Products from './pages/Farmer/Products';
import FarmerLayout from './pages/Farmer/FarmerLayout';
import AddProductForm from './components/Farmer/AddProductForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/farmer/*"
          element={
            <FarmerLayout />
          }
        > */}
        <Route path="/" element={<Overview />}/>
          
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        {/* </Route> */}

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
