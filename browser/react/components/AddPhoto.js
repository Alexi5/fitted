import React from 'react';
import Songs from './Songs';

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


}

export default AddPhoto