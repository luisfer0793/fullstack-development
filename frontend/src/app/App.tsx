import { Routes, Route } from 'react-router-dom';

import { Navbar } from 'components/layout/Navbar/Navbar.component';
import { TourCounter } from 'components/custom/counters/Tour/TourCounter.component';

import { HomePage } from 'pages/Home/Home.page';
import { ToursPage } from 'pages/Tours/Tours.page';
import { BlogPage } from 'pages/Blog/Blog.page';
import { PortfolioPage } from 'pages/Portfolio/Portfolio.page';
import { ContactPage } from 'pages/Contact/Contact.page';
import { TourPage } from 'pages/Tour/Tour.page';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <TourCounter />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="tours/:id" element={<TourPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
