import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import ReserveTableDetails from './components/ReserveTableDetails';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <Container className='karla'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/table_reservation_details' element={<ReserveTableDetails />} />
    </Routes>
    <Footer />
  </Container>
);

export default App;