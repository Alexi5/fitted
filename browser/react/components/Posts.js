import React from 'react'
import {Link} from 'react-router'

const Posts = (props) => {

  let posts = props.allPosts
  let empty ='';
  
  if(posts.length === 0){
    empty = 'There are no posts at this time';
  }

  return (
    <div>
        <div className="header">
            <h3>Posts</h3>
        </div>
        <div className='row'>
        { empty && <div className="notice">{empty}</div> }
            <ul className='posts'>
            {  
                posts && Object.values(posts).map((post, postId) => {
                    return (
                        <div className="list-group-item" key={postId}>
                            <Link className="post-link" to={`/posts/${post.postId}`}>
                                <div className="list">
                                    <h5>
                                        <span>{post.title}</span>
                                    </h5>
                                </div>
                            </Link>
                     </div>
                    );
                })
            }
            </ul>
        </div>
        <br/>
        <div>
            <section>
                <h4 className="menu-item">
                    <Link to='/new-post'>Create New Post</Link>
                </h4>
            </section>
        </div>
    </div>
  )
};

export default Posts;

// Object.keys(posts).map((post, postId) => {
//                     return (
//                         <div className="list-group-item" key={postId}>
//                             <li>{post.title}</li>
//                         </div>  
//                     );

// })

// posts && posts.map( post => {
//     <div className='col-sm-3' key={post.postId}>
//         <li>{post.title}</li>
//     </div>              
// })