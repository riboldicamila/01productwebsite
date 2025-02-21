import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import CreationsGrid from './Components/CreationsCarousel/CreationsGrid';
import CreationsDetails from './Components/CreationsCarousel/CreationsDetails';

import Home from './Pages/Home/Home';
import AboutUs from './Pages/Home/AboutUs';
import Contact from './Pages/Home/Contact';
import WebsiteSearch from './Pages/Home/Search';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<CreationsGrid />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:slug" element={<CreationsDetails />} />
            <Route path="/qa" element={<WebsiteSearch />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
