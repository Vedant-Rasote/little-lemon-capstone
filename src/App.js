import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Container className='karla'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
