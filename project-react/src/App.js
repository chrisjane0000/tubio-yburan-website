import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Profile from './components/Profile';
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
              < AboutUs/>
              <Profile/>
              < Contact/>
              <Footer />
            </>
          }
        />
        <Route path="/tubio-yburan/RecipesPage" element={<RecipesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
