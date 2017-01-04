import React from 'react';
import {deletePost} from '../action-creators/post'
import {browserHistory} from 'react-router'

const SinglePost = (props) => {

let post = props.singlePost

return (
    <div>
        <h3>Post</h3>
        {/*add warning for deletion*/}
        <div className='row'> 
        {    
            <div className='col-lg-2' 
                 key={post.postId}>
                <div className='post'>
                   <h2>{post.title}</h2>
                   <p>{post.content}</p>
                </div>
           </div>              
        }
        </div>
        <div>
            <button type="delete" 
              onClick={deletePost(post.postId)}
              className="btn btn-primary"
              >Delete Post</button>
        </div>
    </div>
  )
};

export default SinglePost;
