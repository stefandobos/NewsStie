import { Router } from 'react-router-dom';
import '../../App.css';
import HeroSection from '../HeroSection';
import React from 'react';
import Card from '../Cards';
import Footer from '../Footer';

function Home (){
    return(
        <>
            <HeroSection />
            <Card />
            <Footer />
        </>
    );
}

export default Home;