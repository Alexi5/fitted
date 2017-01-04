import React from 'react';
import SinglePost from '../components/SinglePost';
import store from '../store.js';
import {connect} from 'react-redux'
import {getSinglePost, deletePost} from '../action-creators/post'; //get action creators 

//map dispatch to props
function mapStateToProps(state){
    return {
        singlePost: state.posts
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        getSinglePost: function(post){
            dispatch(getSinglePost(post));
        }
    }
}

const SinglePostContainer = connect(mapStateToProps, mapDispatchToProps)(SinglePost)
export default SinglePostContainer;



// import React, {Component} from 'react';
// import SinglePost from '../components/SinglePost';
// import store from '../store.js';
// import {connect} from 'react-redux'
// import {getSinglePost, deletePost} from '../action-creators/post'; //get action creators 

// //map dispatch to props
// function mapStateToProps(state){
//     console.log('state: ', state)
//     return {
//         singlePost: state.posts.singlePost
//     }
// }

// //map dispatch to props
// function mapDispatchToProps(dispatch){
//     return {
//         deletePost: function(post){
//             dispatch(deletePost(post));
//         },
//         getSinglePost: function(post){
//             dispatch(getSinglePost(post));
//         }
//     }
// }

// class SinglePostContainer extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             post: props.singlePost
//         }
//     }

//     deleteSinglePost(postId) {
//         deletePost(postId)
//         .then((res) => {
            
//             let allPosts = this.state.post.filter((post) => {
//                 return postId !== post.postId;
//             });

//             this.setState(state => {
//                 state.allPosts = allPosts;
//                 return state;
//             });
//         })
//         .catch((err) => {
//             console.error('err', err);
//         });
//     }

//     render(){
//         return(
//             <SinglePost
//                 post={this.state.post}
//                 deletePost={this.deleteSinglePost.bind(this)}/>
//         )
//     }

// }

// SinglePostContainer = connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer)
// export default SinglePostContainer;