import React from 'react';
import { Link } from 'react-router';
const Img = require('react-picture').Image; 

const SinglePhoto = (props) => {

    let photo = props.singlePhoto;
    let tags = props.photoTags;

    function separateTags(arr, splitter) {
        if (arr.length === 0) {
            return [];
        }

        return arr.slice(0).join(splitter)
    }

    return (
        <div>
            <h3>Photo by {photo.userName}</h3>
            <div className='row'> 
                {    
                    <div className='col-lg-2' key={photo.photoId}>
                        <Img alt='photo' srcSet={photo.imgUrl}/>
                        <small className='caption'>{photo.caption}</small>
                        <br/>
                    </div>   
                } 
                <br/>           
                <p>tags:
                {
                    tags && separateTags(tags, ', ')
                }
                </p>
                <br/>
                <small>posted at {photo.createdAt}</small>
            </div>
        </div>
    )
};

export default SinglePhoto;