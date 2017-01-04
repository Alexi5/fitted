import { GET_SINGLE_POST, 
		 GET_ALL_POSTS,
		 CREATE_POST   } from '../constants';
import axios from 'axios';
import {hashHistory} from 'react-router';

export const singlePost = (post) => {
	return {
		type: GET_SINGLE_POST,
		post
	} 
};

export const getSinglePost = (postId) => {
	return dispatch => {
		axios.get(`/api/posts/${postId}`)
		.then( res => {
			dispatch(singlePost(res.data))
		})
	} 
}

export const deletePost = (postId) => {
	return dispatch => {
		axios.delete(`/api/posts/${postId}`)
		.then( res => {
			console.log('res: ', res)
			
		})
	}
}


export const allPosts = (posts) => {
	return {
		type: GET_ALL_POSTS,
		posts
	}
}

export const getAllPosts = () => {
	return dispatch => {
		axios.get('/api/posts')
		.then( res => {
			dispatch(allPosts(res.data))
		})
	}
}

export const newPost = (title, content) => {
	return {
		type: CREATE_POST,
		title, content
	} 
};

export const createNewPost = (title, content) => {

	return (dispatch, getState) => {
		return axios.post('/api/posts', 
			{title: title, content: content})
		.then(res => res.data )
		.then( newPost => {
			const allExistingPosts = getState().posts.allPosts.concat([newPost]);
			dispatch(getAllPosts(allExistingPosts));

			hashHistory.push(`/posts/${newPost.postId}`)
		})
	}
}
