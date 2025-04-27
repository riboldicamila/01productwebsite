import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ProjectsGrid from './Components/Projects/CreationsGrid';
import ProjectsDetails from './Components/Projects/ProjectsDetails';
import ConnectButton from './Components/ConnectButton/ConnectButton'; 
import Home from './Pages/Home/Home';
import AboutUs from './Pages/Home/AboutUs';
import Contact from './Pages/Home/Contact';
import Questions from './Pages/Home/Questions';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsGrid />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:slug" element={<ProjectsDetails />} />
            <Route path="/qa" element={<Questions />} />
          </Routes>
        </div>
        <Footer />
        <ConnectButton /> {/* Add the button here */}
      </div>
    </Router>
  );
}

export default App;