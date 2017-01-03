import { CREATE_POST, 
		 ADD_PHOTO, ADD_LIST, 
		 GET_USER, GET_USER_POSTS, 
		 GET_USER_PHOTOS, GET_USER_LISTS  } from '../constants';
import axios from 'axios';


export const findUser = (userId) => ({
		type: GET_USER,
		userId
})
export const getUserById = (userId) => {
	// return dispatch => {
	// 	Promise.all([
	// 		axios.get(`/api/users/${userId}`),
	// 		axios.get(`/api/users/${userId}/lists`),
	// 		axios.get(`/api/users/${userId}/posts`),
	// 		axios.get(`/api/users/${userId}/photos`)
	// 	])
	// 	.then(result => 
	// 		result.map(res => res.data))
	// 	.then(results => {
	// 		dispatch(findUser(...results));
	// 	});
	// }

	return dispatch => {
		return axios.get(`/api/users/${userId}/posts`)
		.then(res => {
			dispatch(findUser(res.data)) })
	}
}


export const allUserPosts = (posts) => ({
	type: GET_USER_POSTS,
		  posts
})
export const getAllUserPosts = (userId) => {
	return dispatch => {
		return axios.get(`/api/users/${userId}/posts`)
		.then(res => {
			dispatch(allUserPosts(res.data)) })
	}
}

export const allUserPhotos = (photos) => ({
	type: GET_USER_PHOTOS,
		  photos
})
export const getAllUserPhotos = (userId) => {
	return dispatch => {
		return axios.get(`/api/users/${userId}/photos`)
		.then(res => {
			dispatch(allUserPhotos(res.data)) })
	}
}

export const allUserLists = (lists) => ({
	type: GET_USER_LISTS,
		  lists
})
export const getAllUserLists = (userId) => {
	return dispatch => {
		return axios.get(`/api/users/${userId}/lists`)
		.then(res => {
			dispatch(allUserLists(res.data)) })
	}
}

//=============================================


export const createPost = (user, post) => ({
	type: CREATE_POST,
		  user, 
		  post
})

export const createPhoto = (user, photo) => ({
	type: ADD_PHOTO,
		  user, 
		  photo
})

export const createList = (user, list) => ({
	type: ADD_LIST,
		  user, 
		  list
})
