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
  	<form className='form-row' onSubmit={handleSubmit}>
      <h2>Upload Photo</h2>
    	{/*add warninghere*/}
      <div className='form-group'>
        <label>Name</label>
        <input
          value={input}
          onChange={handleChange}
          type="url" 
          placeholder="Add Photo Here"
          pattern="file:///.+" //type="file" or ="url" 
          required /> 
      </div>
      <div className='form-group'>
        <button type="submit">
        Save Photo </button>
      </div>
    </form>

  )

  //select a list
  //add photo
  //<div> <button type="add" onClick={addPhotoToList(post.postId)}></button>  </div>


}

export default AddPhoto