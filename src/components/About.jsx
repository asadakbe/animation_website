import React from 'react';
import Group from '../images/Group.png'
import '../css/animated.css';
import { NavLink } from 'react-router-dom';
import Common from './common';

const About = () => {
    return(
        <>
            <Common 
            name="Welcome to About page " 
            imgsrc={Group} 
            visit="/contact" 
            btnname="Contact Now" 
            />
        </>
    )
}

export default About;