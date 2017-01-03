import React from 'react';
import User from '../components/User';
import store from '../store.js'
import {connect} from 'react-redux'
import {getUserById, getAllUserPosts,
        getAllUserLists, getAllUserPhotos } from '../action-creators/user';

//map dispatch to props
function mapStateToProps(state){
        console.log(state)
    return {
        allPhotos: state.users.photos,
        allPosts: state.users.posts,
        allLists: state.users.lists,
        userName: state.users.name
    }
}

//map dispatch to props
function mapDispatchToProps(dispatch){
    return {
        actions: {
            getUserById: function(userId){
                dispatch(getUserById(userId));
            },
            getAllUserPosts: function(userId){
                dispatch(getAllUserPosts(userId))
            },
            getAllUserPhotos: function(userId){
                dispatch(getAllUserPhotos(userId))
            },
            getAllUserLists: function(userId){
                dispatch(getAllUserLists(userId))
            } 
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer