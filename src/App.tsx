// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import TechnologiesPage from './components/TechnologiesPage';
import PortfolioPage from './components/PortfolioPage';
import ContactsPage from './components/ContactsPage';
import CareersPage from './components/CareersPage';
import HireDevelopersPage from './components/HireDevelopersPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/careers" element={<CareersPage />} />
        <Route path="/hire-developers" element={<HireDevelopersPage />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;