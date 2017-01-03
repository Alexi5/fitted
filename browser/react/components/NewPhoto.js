import React, {Component} from 'react';
import store from '../store.js';
import {postNewPhoto} from '../action-creators/photo'

class NewPhotoForm extends Component {
  constructor(props){
    super(props);
        this.state = {
            caption: '',
            tags: '',
            img: {},
            dirty: false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange(field, event){
    this.setState({
        [field]: event.target.value,
        dirty: true
    })
  }

  handleSubmit(event){
    event.preventDefault();
    store.dispatch(postNewPhoto(this.state.img))

    //reset the state
    this.setState({
        caption: '',
        tags: '',
        img: {},
        dirty: false
    })

  }

  render(){
    const caption = this.state.caption;
    const tags = this.state.tags;
    const photo = this.state.img;
    let warning = '';

    if( (!photo) && dirty) {
        warning = 'please fill in blank field'
    }

    return (
      <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h2>Post New Photo</h2>
              {/*add warninghere*/}
              <div className='form-group'>
                <label>Caption: </label>
                <br/>
                <input
                  value={caption}
                  onChange={this.handleChange.bind(this, 'caption')}
                  type="text"
                  placeholder="Photo Title"
                /> 
              </div>
              <div className='form-group'>
                <label>Tags: </label>
                <br/>
                <input
                  value={tags}
                  onChange={this.handleChange.bind(this, 'tags')}
                  type="text"
                  placeholder="Tags"
                /> 
              </div>
              <br/>
              <div className='form-group'>
                <label>Add Image</label>
                <input
                  onChange={this.handleChange.bind(this, 'img')}
                  type="file"
                /> 
              </div>
              <div className='form-group'>
                <button type="submit">
                Save Photo </button>
              </div>
            </form>
        </div>
      </div>
    )
  }
};

export default NewPhotoForm
