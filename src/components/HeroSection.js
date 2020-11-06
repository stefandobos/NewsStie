import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video1.mov' autoPlay loop muted />
      <h1>GAME NEWS</h1>
      <p>WHAT IS NEW?</p>
      <div className='hero-btns'>
        <Button
          className='btn'
          buttonStyle='btn--primariy'
          buttonSize='btn--large'
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
