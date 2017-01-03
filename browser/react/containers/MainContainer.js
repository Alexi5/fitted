import React from 'react';
import Main from '../components/Main';
import store from '../store.js'
import {connect} from 'react-redux'
import {getAllPosts} from '../action-creators/post';
import {getAllPhotos} from '../action-creators/photo';
import {getAllLists} from '../action-creators/list';

//map dispatch to props
function mapStateToProps(state){
    return {
        allPhotos: state.photos,
        allPosts: state.posts,
        allLists: state.lists
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        actions: {
            getAllPosts: function(){
                dispatch(getAllPosts());
            },
            getAllPhotos: function(){
                dispatch(getAllPhotos());
            },
            getAllLists: function(){
                dispatch(getAllLists());
            }
        }
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer