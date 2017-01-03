import React from 'react'
import {Link} from 'react-router'

const User = (props) => {

  let userPhotos = props.allPhotos
  let userPosts = props.allPosts
  let userLists = props.allLists
  let userName = props.userName

  let empty;

    // if(userLists.length === 0){
    //     empty = 'You have no lists at this time';
    // }else if (userPosts.length === 0) {
    //     empty = 'You have no posts at this time';
    // } else if (userPhotos.length === 0) {
    //     empty = 'You have no photos at this time';
    // }

  return (
    <div>
        <h2>User: {userName}</h2>
        <br/>
        <div className='row'> 
            <h4>Your Photos</h4>
            {/*<div> {(userPhotos.length === 0) && <div className="notice">{empty}</div> }</div>*/}
            <div className='user-lists'>
            {  
                userPhotos && Object.values(userPhotos).map((photo, photoId) => {
                    return (
                        <div className="list-group-item" key={photoId}>
                            <Link className="photo-link" to={`/photos/${photo.photoId}`}>
                                <img src={photo.imgUrl} />
                            </Link>
                            <br/>
                            <small className= "photo-tags">tags: {photo.tag}</small>
                            <br/>
                        </div> 
                    );
                })
            }       
            </div>
            <br/>

            <h4>Your Posts</h4>
            {/*<div> {(userPosts.length === 0) && <div className="notice">{empty}</div> }</div>*/}
            <div className='user-posts'>
            {  
                userPosts && Object.values(userPosts).map((post, postId) => {
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
            <br/>
            <h4>Your Lists</h4>
            {/*<div> {(userLists.length === 0) && <div className="notice">{empty}</div> }</div>*/}
            <div className='user-lists'>
            {  
                userLists && Object.values(userLists).map((list, listId) => {
                    return (
                    <div className="list-group-item" key={listId}>
                        <Link className="list-link" to={`/lists/${list.listId}`}>
                            <h5>
                                <span>{list.name}</span>
                            </h5>
                        </Link>
                        <small>tags: {list.tags}</small>
                     </div> 
                    );
                })
            }       
            </div>
            <br/>
            
        </div>
    </div>
  )
};

export default User;