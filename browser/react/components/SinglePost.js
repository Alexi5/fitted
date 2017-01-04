import React from 'react';
import {deletePost} from '../action-creators/post'

const SinglePost = (props) => {

  let post = props.singlePost

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
          <form onClick={props.deletePost(post.postId)}>
            <button type="delete" className="btn btn-primary">Delete Post</button>
          </form>
        </div>
    </div>
  )
};

export default SinglePost;


// import React, {Component} from 'react';
// import {deletePost} from '../action-creators/post'

// class SinglePost extends Component {

//   constructor(props){
//     super(props);
//   }

//   deleteHandler(e){
//       e.preventDefault();
//       this.props.deletePost(this.props.post.postId);
//   }

//   render(){
//     let post = this.props.singlePost
    
//     return (
//         <div>
//             <h3>Post</h3>
//             <div className='row'> 
//             {    
//                 <div className='col-lg-2' 
//                      key={post.postId}>
//                     <div className='post'>
//                        <h2>{post.title}</h2>
//                        <p>{post.content}</p>
//                     </div>
//                </div>              
//             }
//             </div>
//             <div>
//                 <button 
//                   type="delete" 
//                   className="btn btn-primary"
//                   onClick={this.deleteHandler.bind(this)}>Delete Post</button>
//             </div>
//         </div>
//       )
//   }
// };

// export default SinglePost;