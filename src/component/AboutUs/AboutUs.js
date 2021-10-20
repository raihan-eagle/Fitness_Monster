import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='container '>
            
                <div id="aboutus">
                    <div className='p-md-3'></div>
                    <br/>
                    {/* About us Section  */}
                    <h1 className ='fw-bold'> Why <span className='text-warning'> Fitness MONSTER</span></h1>
                    <h5 className = 'fw-light p-3' >We are not only a franchise, we are a local business too, servicing the local residents of Nunawading, Blackburn, Blackburn North, Blackburn South, Box Hill, Box Hill North, Box Hill South, Burwood, Burwood East, Forest Hill, Mitcham, Mont Albert, Mont Albert North, Surrey Hills, Vermont and Vermont South.</h5>
                    <br />
                    {/* about feature  */}
                    <div className='row text-format'>
                        <div className='col-md-4 p-3 d-flex'>
                            <div>
                                <img className='img-fluid' src="https://i.ibb.co/3kjgRMg/bg-png.webp" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'>COMMUNITY</h6>
                                <p className='p-2 text-format'>
                                    We pride ourselves on the culture we have created here at Hammers’ Gym between the team and our members along with our involvement within our local Community. When you join up with us you don’t simply join a gym you become part of the Hammers Family where we want to see you succeed in your goals with our undivided support.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 d-flex'>
                        <div>
                                <img className='img-fluid' src="https://i.ibb.co/jMJ78H4/checklist-png.webp" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'> DIFFERENCE Here</h6>
                                <p className='p-2 text-format'>                              
                                We have one main purpose here at Fitness - Monster and it’s to get you active and moving towards your goals. We encourage a healthy balanced lifestyle to create a better you via fitness and dietary plans. We love nothing more than to see our members transform their lives for the better.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 d-flex'>
                        <div>
                                <img className='img-fluid' src="https://i.ibb.co/9WtBZ82/shower-min-png.webp" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'>IN OUR GYM</h6>
                                <p className='p-2 text-format'>
                                
                                    The members safety is our priority over everything, we have fully monitored 24 hours a day video surveillance for peace of mind when you enter the gym. All our equipment is constantly checked for damage and faults to avoid mishaps. We also take our hygiene very seriously and have an appointed cleaner to maintain the condition of the gym at all times.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 d-flex'>
                        <div>
                                <img className='img-fluid' src="https://i.ibb.co/7pbx4MF/arm-min-png.webp" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'>STATE OF THE ART FACILITY AND TRAINERS.</h6>
                                <p className='p-2 text-format'>
                                When you enter our gym you will instantly realise why we are as successful at what we do. Our gym is state of the art offering a variety of training areas to achieve your goals with the latest and best equipment available with Australia’s best talented trainers to support you. 
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 d-flex'>
                        <div>
                                <img className='img-fluid' src="https://i.ibb.co/dML3ksc/bench-min-png.webp" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'>FITNESS SOLUTIONS.</h6>
                                <p className='p-2 text-format'>
                                    Here at Hammers we aren’t your typical gym. We pride ourselves on having diverse systems in place to help you achieve your desired outcomes. From our tailored fitness programs to strength, toning, weight-loss and wellness. We also have Australia’s only fully certified structured Martial Art Programs
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 d-flex'>
                        <div>
                                <img className='img-fluid' src="https://i.ibb.co/jMJ78H4/checklist-png.webp" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'> DIFFERENCE Here</h6>
                                <p className='p-2 text-format'>                              
                                We have one main purpose here at Fitness - Monster and it’s to get you active and moving towards your goals. We encourage a healthy balanced lifestyle to create a better you via fitness and dietary plans. We love nothing more than to see our members transform their lives for the better.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* About us Section ends*/}
                </div>
            </div>
    );
};

export default AboutUs;