import React from 'react';
import {Link} from 'react-router'
const Img = require('react-picture').Image; 

const SingleList = (props) => {

  // console.log('single list props: ', props)
  let listName = props.listName;
  let listPhotos = props.listPhotos;
  let tags = props.listTags; //an object
  let index = 0;

  function separateTags(arr, splitter) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(0).join(splitter)
  }

return (
    <div>
        <h3>{listName}</h3>
        <div className='row'> 
        {
          listPhotos && Object.values(listPhotos).map((photo) => {
            return (
              <div className="list-group-item" key={index++}>
                  <br/>        
                    <Img alt='photo' srcSet={photo}/>
                  <br/>
              </div> 
            );
          })
        }
        <br/>
          <small>tags:
          {
            tags && separateTags(tags, ', ')
          }
          </small>
        </div>
    </div>
  )
};

export default SingleList;