import React from 'react'
import {Link} from 'react-router'

const Main = (props) => {

	let posts = props.allPosts;
	let photos = props.allPhotos;
	let lists = props.allLists;
	let empty;

 	if (lists.length === 0 && posts.length === 0 && photos.length === 0){
    	empty = 'Log In to View Content';
 	}

  return (
    <div>
	    <div className="section-preview">
	    	<div className="preview">
	    		<h4>Recent Posts</h4>
	    		<div> {empty && <div className="notice">{empty}</div> }</div>
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
	    	</div>
	    	<div className="preview">
	    		<h4>Recent Photos</h4>
	    		<div> {empty && <div className="notice">{empty}</div> }</div>
	    		{
			        photos && Object.values(photos).map((photo, photoId) => {
			          return (
			            <div className="list-group-item" key={photoId}>
			                <Link className="photo-link" to={`/photos/${photo.photoId}`}>
			                    <img src={photo.imgUrl} />
			                </Link>
			            </div> 
			          );
			        })
    			}
	    	</div>
	    	<div className="preview">
	    		<h4>Recent Lists</h4>
	    		<div> {empty && <div className="notice">{empty}</div> }</div>
	    		{  
	                lists && Object.values(lists).map((list, listId) => {
	                    return (
	                     <div className="list-group-item" key={listId}>
	                        <Link className="list-link" to={`/lists/${list.listId}`}>
	                            <div className="list">
	                                <h5>{list.name}</h5>
	                            </div>
	                        </Link>
	                     </div>  
	                    );
	                })
           		}
	    	</div>
	    </div>
    </div>
  )

};

export default Main;
