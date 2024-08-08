import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MealsCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleFunction = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="card mx-3 my-4" style={{ width: '25rem' }}>
        <img src={props.src} loading='lazy' className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h6 className="card-title">{props.title}</h6>
          <ul className="list-group list-group-flush my-3">
            <li className="list-group-item">{props.text1}</li>
            <li className="list-group-item">{props.text2}</li>
          </ul>
          <button className="btn btn-success w-100" onClick={toggleFunction}>
            {/* {showDetails ? 'Hide Details' : 'Show Details'} */}
            Show Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {showDetails && (
        <div className="modal show d-block bg-light p-2 text-black bg-opacity-75 rounded border w-75 w-md-50" tabIndex="-1" role="dialog" 
        style=
        {{ overflowY: 'scroll', maxHeight: '60vh', position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'}}>
              <div className="modal-header d-flex justify-content-between">
                <h5 className="modal-title">{props.title}</h5>
                <button
                  type="button"
                  className="close bg-danger text-white rounded px-3"
                  aria-label="Close"
                  onClick={toggleFunction}
                >
                  <span aria-hidden="true" className='fs-3'>&times;</span>
                </button>
              </div>
              <div className="modal-body">
              
                <h6><strong>Ingredients:</strong></h6>
                <ul className="list-group list-group-flush ">
                  {props.ingredients.map((ingredient, index) => (
                    <li key={index} className="list-group-item bg-light p-2 text-black bg-opacity-75">{ingredient}</li>
                  ))}
                </ul>
                <h6 className='mt-4 mb-2'><strong>Instructions:</strong></h6>
                <p>{props.instructions}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger w-100 "
                  onClick={toggleFunction}
                >
                  Close
                </button>
              </div>
            
          
        </div>
      )}
    </>
  );
};

export default MealsCard;

