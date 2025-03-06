import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Blog from './components/pages/blog/Blog';
import BlogSingle from './components/pages/blog/BlogSingle';
import Login from './components/pages/loginRegister/Login';
import Register from './components/pages/loginRegister/Register';
import Exchange from './components/pages/exchange/Exchange';
import Shop from './components/pages/shop/Shop';

import ProductSingle from './components/pages/shop/ProductSingle';
import CartPage from './components/pages/shop/CartPage';
import CheckoutPage from './components/pages/shop/CheckoutPage';


import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {
  

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductSingle />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;