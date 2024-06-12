import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import RecipesPage from './components/RecipesPage';
import Sidenav from './components/Sidenav';
import Title from './components/Title';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/tubio-yburan"
          element={
            <>
              <Sidenav />
              <Title />
              <Greetings />
              <Footer />
            </>
          }
        />
        <Route path="/tubio-yburan/RecipesPage" element={<RecipesPage />} />
        <Route path="/tubio-yburan/AboutUs" element={<AboutUs />} />
        <Route path="/tubio-yburan/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
