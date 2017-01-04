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
