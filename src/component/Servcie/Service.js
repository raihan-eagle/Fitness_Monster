import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {id, name, imagurl, desmini, desdetails, packages} = props.service 
    const handleServiceDetails = ()=>{

    }
    
    return (
        <div>            
                <div className="col my-2">
                    <div className="card h-100">
                    <img src={imagurl} className="card-img-top img-fluid "  alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{id} {name}</h5>
                        <p className="card-text">{desmini}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{packages}</small>
                    </div>
                    <div >
                        <Link to={`/services/${id}`}>
                        <button onClick={()=>handleServiceDetails()} className="btn btn-warning px-3 py-1 m-2">Details</button>
                        </Link>
                    </div>
                    </div>
                </div>
                
        </div>
    );
};

export default Service;