import React from 'react';
import stuff from '../images/stuff.png'
import '../css/animated.css';
import { NavLink } from 'react-router-dom';
import Common from './common';

const Home = () => {
    return(
        <>
            <Common 
            name="Grow your business with " 
            imgsrc={stuff} 
            visit="/service" 
            btnname="Get Started" 
            />
        </>
    )
}

export default Home;