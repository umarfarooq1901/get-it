import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCard = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className='card mx-3 my-4' style={{width: '25rem'}}>
                <img className='card-img-top' loading='lazy' src={props.src} alt={props.title} />
                <div className="card-body">
                    <h6 className='card-title'> {props.title}</h6>
                    <ul className='list-group list-group-flush my-3'>
                        <li className="list-group-item">{props.desc}</li>
                        <li className="list-group-item text-end">{props.publish}</li>
                    </ul>
                    <button className='btn btn-success w-100' onClick={() => setShowDetails(!showDetails)}>Show Details</button>
                </div>
            </div>

            {showDetails && (
                <div className='modal show d-block bg-light p-2 text-black bg-opacity-75 rounded border w-75 w-md-50' tabIndex='-1' role='dialog'
                     style={{position: 'fixed', top: '50%', left:'50%', transform: 'translate(-50%, -50%)', maxHeight: '50vh'}}>
                    <div className="modal-header d-flex justify-content-between">
                        <h5 className='modal-title mt-4'>{props.title}</h5>
                        <button type="button" className="btn-close bg-danger px-3" aria-label="Close"  style={{position: 'fixed', top: '3%', right:'1%'}} onClick={() => setShowDetails(!showDetails)}>
                            {/* <span aria-hidden='true' className='fs-3'>&times;</span> */}
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group list-group-flush">
                            <li className='list-group-item'>{props.content}</li>
                            <li className='list-group-item'><span className='fw-bold'>Author:  </span>{props.author}</li>
                        </ul>
                        <div className="modal-footer ">
                            <a href={props.url} target='_blank' rel='noopener noreferrer'>
                                <button className='btn btn-success'>More Info</button>
                            </a>
                            {/* <button className="btn btn-danger w-50 my-5" onClick={() => setShowDetails(!showDetails)}>Close</button> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BlogCard;
