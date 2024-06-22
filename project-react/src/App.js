import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import RecipesPage from './components/RecipesPage';
import Sidenav from './components/Sidenav';
import Slideshow from './components/Slideshow';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/tubio-yburan"
          element={
            <>
              <Sidenav />
              <Greetings />
              <Slideshow />
              < Contact/>
              <Footer />
            </>
          }
        />
        <Route path="/tubio-yburan/RecipesPage" element={<RecipesPage />} />
        <Route path="/tubio-yburan/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
