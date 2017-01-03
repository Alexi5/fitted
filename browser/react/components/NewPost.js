import React, {Component} from 'react';
import store from '../store.js';
import {createNewPost} from '../action-creators/post'
//TO DO: change size in comment input
class NewPostForm extends Component {

  constructor(props){
        super(props);

        this.state = {
            postTitle: '',
            postContent: '',
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
    
    store.dispatch(
      createNewPost(this.state.postTitle, this.state.postContent)
    )

    //reset the state
    this.setState({
      postTitle: '', 
      postContent: '', 
      dirty: false
    })

    // this.transitionTo('posts')

  }

  render() {

    const dirty = this.state.dirty;
    const title = this.state.postTitle;
    const content = this.state.postContent;
    let warning = '';

    if( (!title || !content) && dirty) {
        warning = 'please fill in blank field'
    }

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>New Post</h2>
            {/*add warninghere*/}
            <div className='form-group'>
              <label>Post Title: </label>
                <br/>
                <input
                  name="title"
                  value={title}
                  onChange={this.handleChange.bind(this, 'postTitle')}
                  type="text"
                  placeholder="Post Title" /> 
            </div>
            <div className='form-group'>
              <label>Post Content: </label>
              <br/>
              <input
                name="content"
                value={content}
                onChange={this.handleChange.bind(this, 'postContent')}
                type="text"
                placeholder="Post Content" />
            </div>
              <button 
              type="submit"
              className="btn btn-primary">
              Save Post </button>
          </form>
        </div>
      </div>
    )
  }
};

export default NewPostForm;


// const PostForm = (props) => {

//   const handleSubmit = props.handleSubmit;
//   const handleChange = props.handleChange;
//   const title = props.title;
//   const content = props.content;
//   const warning = props.warning;

//   return (
//     <form className='form-row' onSubmit={handleSubmit}>
//       <h2>New Post</h2>
//     {/*add warninghere*/}
//       <div className='form-group'>
//         <input
//           name="titleInput"
//           value={title}
//           onChange={handleChange}
//           type="text"
//           placeholder="Post Title"
//         /> 
//         <br/>
//         <input
//           name="contentInput"
//           value={content}
//           onChange={handleChange}
//           type="text"
//           placeholder="Post Content"
//         />
//         <br/> 
//         <button type="submit">
//         Save Post </button>
//       </div>
//     </form>
//   )
// };

// export default PostForm;