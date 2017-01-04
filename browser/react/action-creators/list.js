import { GET_ALL_LISTS, GET_SINGLE_LIST,
		 CREATE_LIST, 
		 GET_LIST_PHOTOS } from '../constants';
import axios from 'axios';
import {hashHistory} from 'react-router';


export const singleList = (list) => {
	return {
		type: GET_SINGLE_LIST,
		list
	} 
};

export const getSingleList = (listId) => {
	return dispatch => {
		return axios.get(`/api/lists/${listId}`)
		.then(res => {
			dispatch(singleList(res.data), allPhotosInList(res.data))
		})
	}
}

export const allPhotosInList = (listPhotos) => {
	return {
		type: GET_LIST_PHOTOS,
		listPhotos
	} 
};


export const allLists = (lists) => {
	return {
		type: GET_ALL_LISTS,
		lists
	} 
};

export const getAllLists = () => {
	return dispatch => {
		return axios.get('/api/lists')
		.then(res => {
			dispatch(allLists(res.data)) })
	}
}

export const newList = (listName) => {
	return {
		type: CREATE_LIST,
		listName
	} 
};

export const createNewList = (listName, listTags) => {
	return (dispatch, getState) => {
		return axios.post('/api/lists', 
			{name: listName, tags: listTags})
		.then(res => res.data)
		.then( newList => {
			const allExistingLists = getState().lists.allLists.concat([newList]);
			
			dispatch(getAllLists(allExistingLists));

			hashHistory.push(`/lists/${newList.listId}`)
		})
	}
}

