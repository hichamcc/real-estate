// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import Listings from '../components/Listings';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Slide from '@/components/Slide';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
const HomePage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Oasis Estate</title>
            </Head>
            <Navigation />
            <Home />
            <Slide />
            <Listings />
            <Faq />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
