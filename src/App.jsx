import { Routes, Route } from 'react-router-dom';

import NavbarX from './componen/NavbarX';
import FooterX from './componen/FooterX';
import Scrollx from './componen/Scrollx';

import HomePage from './pages/HomePage';
import CrewPage from './pages/CrewPage';
import AdatPage from './pages/AdatPage';
import DaerahPage from './pages/DaerahPage';
import Funfact from './pages/FunFact';

function App() {
  return (
    <div>
      <Scrollx />
      <NavbarX />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/fun" element={<Funfact />} />
        <Route path="/adat" element={<AdatPage />} />
        <Route path="/daerah" element={<DaerahPage />} />
      </Routes>
      <FooterX />
    </div>
  );
}

export default App;