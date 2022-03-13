import { Routes, Route } from 'react-router-dom';

import { useElementSize } from '@mantine/hooks';

import { Navbar } from 'components/layout/Navbar/Navbar.component';
import { Footer } from 'components/layout/Footer/Footer.component';
import { SidebarNav } from 'components/layout/SidebarNav/SidebarNav.component';
import { DrawerManager } from 'components/custom/managers/Drawer/DrawerManager.component';

import { HomePage } from 'pages/Home/Home.page';
import { ToursPage } from 'pages/Tours/Tours.page';
import { BlogPage } from 'pages/Blog/Blog.page';
import { PortfolioPage } from 'pages/Portfolio/Portfolio.page';
import { ContactPage } from 'pages/Contact/Contact.page';
import { TourPage } from 'pages/Tour/Tour.page';

import { useStyles } from './App.style';

function AppComponent() {
  const { ref: navbarRef, height: navbarHeight } = useElementSize();
  const { ref: footerRef, height: footerHeight } = useElementSize();

  const {
    classes: { main },
  } = useStyles({ navbarHeight, footerHeight });

  return (
    <>
      <Navbar ref={navbarRef} />
      <DrawerManager />
      <SidebarNav />
      <main className={main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="tours/:id" element={<TourPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </main>
      <Footer ref={footerRef} />
    </>
  );
}

export default AppComponent;
