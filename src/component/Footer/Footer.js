import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <br />
            <hr />
            <div className='d-flex justify-content-around bg-info p-3 '>
                        <div className='text-dark text-center'>
                            <h4>Partners</h4>
                            <img src="https://i.ibb.co/jDbx3Sc/Hpay2.webp" alt="" />
                            
                            <br />
                            <img src="https://i.ibb.co/PTcPVhS/Respawn2.webp" alt="" />
                        </div>
                        <div className='text-dark text-center'>
                            <h4 >Contact</h4>
                            <p className='text-light bg-secondary p-2 rounded-3 shadow'>Fitness Monster <br /> Tel: 281.572.0485 <br /> hello@fitness.com <br /> 801 Orchid Drive <br /> Naples, FL 34101</p>
                        </div>
                        <div className='text-dark text-center'>
                            <h4>Partners</h4>
                            <img src="https://i.ibb.co/jDbx3Sc/Hpay2.webp" alt="" />
                            <br />
                            <img src="https://i.ibb.co/PTcPVhS/Respawn2.webp" alt="" />
                        </div>
            </div>
                    <div className ="bg-warning">
                                    <NavLink className="links" to="/home">Home</NavLink><span> | </span>
                                    <NavLink className="links" to="/home#services">Services</NavLink> <span> | </span>
                                    <NavLink className="links" to="/home#aboutus">AboutUs</NavLink> <span> | </span>
                                    <NavLink className="links" to="/home#testi">Testimonials</NavLink>
                        
                    </div>
            <h6 className='fw-light text-center bg-dark text-white m-0 pb-3'> © 2021 Fitness Monster </h6>
            
        </div>
    );
};

export default Footer;