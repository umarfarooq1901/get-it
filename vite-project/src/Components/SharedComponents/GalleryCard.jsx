import React from 'react'

const GalleryCard = (props) => {
  return (
        <div className="card mx-3 my-4" style={{width: '25rem', height: '40rem'}}>
            <img src={props.src} loading='lazy' className='card-img-top h-75' alt= {props.url} />
            <div className="card-body">
              <h6 className="card-title">Photgrapher: <span className=''>{props.photographer}</span> </h6>
              <ul className="list-group list-group-flush my-3">

                  <li className="list-group-item">
                    <a href= {props.url} target='_blank'> <button className='btn btn-success w-100'>More Info</button></a>
                   
                  </li>

              </ul>
           
            </div>
        </div>
  )
}

export default GalleryCard




