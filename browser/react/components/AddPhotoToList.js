import React from 'react';
import List from './Lists';
import Photos from './Photos'
import SinglePhoto from './SinglePhoto'
import {addPhotoToList} from '../action-creators/photo'


const AddPhoto = (props) => {

  const listPhotos = props.listPhotos;
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;

  return (
  	<div className="row">
      <h2>Add Photo</h2>
      <br/>
      <form className='form-row' onSubmit={handleSubmit}>
      	{/*add warninghere*/}
        <div className='form-group'>
          <label>Upload Photo</label>
          <br/>
          <input
            onChange={handleChange}
            type="url" 
            placeholder="Add Photo Link here"
            // pattern="file:///.+" //type="file" or ="url" 
            // required 
            /> 
        </div>
        <div className='form-group'>
          <button type="submit">
          Save Photo </button>
        </div>
      </form>
    </div>

  )

  //select a list
  //add photo
  //<div> <button type="add" onClick={addPhotoToList(post.postId)}></button>  </div>


}

export default AddPhoto