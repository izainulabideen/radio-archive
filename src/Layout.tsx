// src/Layout.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import FontLoader from './FontLoader';
import { FontProvider, useFontConfig } from './context/FontProvider';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { fontConfig } = useFontConfig();

  return (
    <FontProvider>
      <FontLoader />
      <div
        id="top"
        className="bg-color1"
        style={{ fontFamily: fontConfig?.specificFontName }}
      >
        <Header />
        {children}
        <Testimonial />
        <Footer />
      </div>
    </FontProvider>
  );
};

export default Layout;
