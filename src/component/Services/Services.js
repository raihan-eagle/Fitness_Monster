import React, { useContext } from 'react';
import { ServiceContext } from '../../App';
import Service from '../Servcie/Service';



const Services = () => {
    
      
const services = useContext(ServiceContext)
    return (
        
        <div className='container' id='services'>
            <hr />
            <div className='p-md-3'></div>
            <h1 className='fw-bold'> <span className='text-danger'>Services</span> We Provide</h1>
            <h3 className='fw-light'>When you enter our gym you will instantly realise why we are as successful at what we do. Our gym is state of the art offering a variety of training areas to achieve your goals with the latest and best equipment available with Australia’s best talented trainers to support you.</h3>
            <br />
            <div className='p-md-3'></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                
                ></Service>)
            }
            </div>
        </div>
        
    );
};

export default Services;