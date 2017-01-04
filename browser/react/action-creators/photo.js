import { GET_SINGLE_PHOTO,
		 GET_ALL_PHOTOS,
		 CREATE_PHOTO } from '../constants';
import axios from 'axios';
import {hashHistory} from 'react-router';

export const singlePhoto = (photo) => {
	return {
		type: GET_SINGLE_PHOTO,
		photo
	} 
};

export const getSinglePhoto = (photoId) => {
	return dispatch => {
		axios.get(`/api/photos/${photoId}`)
		.then( res => {
			dispatch(singlePhoto(res.data))
		})
	}
}

export const allPhotos = (photos) => {
	return {
		type: GET_ALL_PHOTOS,
		photos
	} 
};

export const getAllPhotos = () => {	
	return dispatch => {
		return axios.get('/api/photos')
		.then( res => {
			dispatch(allPhotos(res.data))
		})
	}
}

export const newPhoto = (photo) => {
	return {
		type: CREATE_PHOTO,
		photo
	}
}

export const postNewPhoto = (photo) => {
	return (dispatch, getState) => {
		return axios.post('/api/photos', {imgUrl: photo})
		.then(res => res.data)
		.then( newPhoto => {
			const allExistingPhotos = getState().photos.allPhotos.concat([newPhoto]);
			dispatch(newPhoto(allUserPhotos));
			
			hashHistory.push(`/photos/${newPhoto.photoId}`)
		})
	}
}

export const addPhotoToList = (listId, photoId) => {
	return (dispatch, getState) => {
		return axios.post(`/api/lists/${listId}/photos`, 
			{listId: listId, photoId: photoId})
		.then(res => res.data)
		.then(photo => {
			//get the state
			const targetList = getState().lists.singleList
			const listPhotos = singleList.photos

			const addedPhoto = photos.concat(photo)
			const newList = Object.assign({}, targetList, {listPhotos: addedPhotos})
		})
	}
}

