import React from 'react';
import {deletePost} from '../action-creators/post'

const SinglePost = (props) => {

  let post = props.singlePost
  console.log('post', post)

return (
    <div>
        <h3>Post by {post.userName}</h3>
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
          <form onSubmit={props.deletePost(post.postId)}>
            <button type="delete" className="btn btn-primary">Delete Post</button>
          </form>
        </div>
    </div>
  )
};

export default SinglePost;