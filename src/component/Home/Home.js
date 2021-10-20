import React from 'react';
import banner from '../../images/banner.png'
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div id='home'>
                <div className='p-md-3'></div>
                <br/>
                <h1 className='fw-bolder'>Fitness - MONSTER</h1>
                <br />
                <img className='img-fluid' src={banner} alt='' ></img>
            </div>
            <br />
            <AboutUs></AboutUs>
            <Services></Services>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;