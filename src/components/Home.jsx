import React from 'react'
import Hero from './Hero';
import CurveDivider from './CurveDivider';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Specials from './Specials';
import BookingSection from './BookingSection';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <main className='mt-5'>
                <Hero />
                <CurveDivider />
                <AboutUs />
                <Gallery />
                <Specials />
                <Testimonials />
                <BookingSection/>
                <Contact />
            </main>
            <hr />
        </>
    )
}

export default Home