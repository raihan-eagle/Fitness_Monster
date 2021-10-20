import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ReloadContext, ServiceContext } from '../../App';


const ServiceDetails = () => {
    
    const services = useContext(ServiceContext)
    const isLoading = useContext(ReloadContext)
    const {serviceId} = useParams();
    const serviceIdInt = parseInt(serviceId);
    console.log(isLoading)

    if(isLoading){
        return <Spinner animation ='border' variant='danger'/>
    }
    const currentService = services.find(service=>{return service.id === serviceIdInt})
    const {id, imagurl, desmini, desdetail, packages, name } = currentService

    if(isLoading){
        return <Spinner animation ='border' variant='danger'/>
    }
    
    return (
        <div className='container'>
            <h1 className="fw-bold">Welcome to Fitness Monster {name} Program </h1>
            <div className='row'>
                <div className = 'col-md-7 m-auto'>
                    <div className="card h-100 p-3 m-3">
                        <img src={imagurl} className="card-img-top img-fluid"  alt="..."/>
                        <div className="card-body p-3 m-3">
                        <h5 className="card-title">{id} {name}</h5>
                        <p className="card-text">{desdetail}</p>
                        </div>
                        <div className="card-footer">
                        <small className="">{packages}</small>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
};

export default ServiceDetails;