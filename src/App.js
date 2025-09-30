import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <MenuSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
