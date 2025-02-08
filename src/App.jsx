import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import BlogGrid from './Components/BlogCarousel/BlogGrid';
import AboutUs from './Pages/Home/AboutUs';
import Contact from './Pages/Home/Contact';
import CollectionPage from './Pages/Home/Collection';
import BlogDetail from './Components/BlogCarousel/BlogDetail';
import WebsiteSearch from './Pages/Home/Search';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creations" element={<BlogGrid />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/technologies" element={<CollectionPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/search" element={<WebsiteSearch />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
