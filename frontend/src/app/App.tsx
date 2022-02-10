import { Routes, Route } from 'react-router-dom';

import { Navbar } from 'components/layout/Navbar/Navbar.component';

import { HomePage } from 'pages/Home/Home.page';
import { ServicesPage } from 'pages/Services/Services.page';
import { BlogPage } from 'pages/Blog/Blog.page';
import { PortfolioPage } from 'pages/Portfolio/Portfolio.page';
import { ContactPage } from 'pages/Contact/Contact.page';

import './App.css';
import { TourCountPopOver } from '../components/PopOvers/TourCount/TourCountPopOver.component';

function App() {
  const onClickHandler = () => {
    console.log('Hola');
  };

  return (
    <>
      <Navbar />
      <TourCountPopOver />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
