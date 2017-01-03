import React from 'react';
import {Link} from 'react-router'
const Img = require('react-picture').Image; 

const Photos = (props) => {
  let photos = props.allPhotos;
  let empty ='';
  
  if(photos.length === 0){
    empty = 'There are no photos at this time';
  }

  return (
    <div>
      <div className="header">
        <h3>Photos</h3>
      </div>
      { empty && <div className="notice">{empty}</div> }
      <div className='row'> 
      { 
        photos && Object.values(photos).map((photo, photoId) => {
          return (
            <div className="list-group-item" key={photoId}>
                <br/>
                <Link className="photo-link" to={`/photos/${photo.photoId}`}>
                  <Img alt='photo' srcSet={photo.imgUrl}/>
                </Link>
            </div> 
          );
        })
    	}
    	</div>
      <br/>
        <div>
            <section>
                <h4 className="menu-item">
                    <Link to='/new-photo'>Upload New Photo</Link>
                </h4>
            </section>
        </div>
    </div>
  )
};


export default Photos;