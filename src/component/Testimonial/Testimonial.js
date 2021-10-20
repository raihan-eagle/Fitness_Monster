import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className="container " id="testi">

                <br />
                <br />

                <h1 className='fw-bold bg-warning'>Testimonials from our Happy Customres</h1>
                <br />
                <br />
                <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="https://i.ibb.co/LCJmdkp/maxresdefault.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <br />
                        <h5 className="card-title">Alex' Martin</h5>
                        <p className="card-text p-3 m-3">They are the best. They make sure you keep the pace with time. I am happy that I choose them. I dont give 5 stars usually to any service but they made me do it. Cheers!</p>
                        <p className="card-text"><small className="text-muted">Contact: +880167000-000</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;