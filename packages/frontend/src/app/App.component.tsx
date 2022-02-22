import { Routes, Route } from 'react-router-dom';

import { useElementSize } from '@mantine/hooks';

import { Navbar } from 'components/layout/Navbar/Navbar.component';
import { Footer } from 'components/layout/Footer/Footer.component';
import { TourCounter } from 'components/custom/counters/Tour/TourCounter.component';

import { HomePage } from 'pages/Home/Home.page';
import { ToursPage } from 'pages/Tours/Tours.page';
import { BlogPage } from 'pages/Blog/Blog.page';
import { PortfolioPage } from 'pages/Portfolio/Portfolio.page';
import { ContactPage } from 'pages/Contact/Contact.page';
import { TourPage } from 'pages/Tour/Tour.page';

import './App.css';
import { useStyles } from './App.style';

function AppComponent() {
  const { ref: navbarRef, height: navbarHeight } = useElementSize();
  const { ref: footerRef, height: footerHeight } = useElementSize();

  const {
    classes: { app },
  } = useStyles({ navbarHeight, footerHeight });

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={app}>
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
      </div>
      <Footer ref={footerRef} />
    </>
  );
}

export default AppComponent;
