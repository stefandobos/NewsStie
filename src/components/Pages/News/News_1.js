import React, { Component } from 'react';
import './News_1.css';
import Footer from '../../Footer'

export default class News_1 extends Component{
    render(){
        return(
            <div className='container-news'>
                <video src='/videos/video2.mov' autoPlay loop muted />
                <h1 className='title'>PLAYSTATION 5 RELASE DATE</h1>
                <div className='content-container'>
                    <img src='/images/image2.jpeg' className='img--ps' alt='PlayStation5'/>
                    <h2>PlayStation 5</h2>
                    <p>Sony has officially unveiled the PS5 and we're now just weeks away from the next PlayStation arriving in stores all over the world (here's the best PS5 pre-order deals ahead of Black Friday). Game on!</p>
                    <p>PlayStation has always offered more than just games, though. The PS5 hopes to impress with 4K Blu-ray playback, immersive 3D Audio, clever haptic feedback tech and top-notch streaming apps. But how much will the PS5 cost? Will it offer 8K? And what will the user PS5 user interface look like?  
                    
                        The final pieces of the PS5 puzzle have now dropped into place and a select few have been 'hands on' with the hotly-anticipated hardware. Here's everything we know about the PS5, from the design and spec to 4K games and entertainment apps...

                        PS5 release date: 12th November in the US, Japan, Canada, Mexico, Australia, New Zealand and South Korea; 19th November in the UK and rest of the world
                        PS5 price: the PS5 Digital Edition price is £360 (€400, $400, AU$599) and the full-fat PS5 with disc drive will cost £450 (€500, $500, AU$750).</p>
                </div>
                <Footer />
            </div>
        )
    }
}