import { GET_SINGLE_PHOTO,
		     GET_ALL_PHOTOS,
         CREATE_PHOTO } from '../constants';
// import { convertPhotos } from '../utils';

export const initialPhotoState = {
  singlePhoto: {},
  allPhotos: [],
};

export default function (state = initialPhotoState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    
    case GET_SINGLE_PHOTO:
      return (newState.singlePhoto = action.photo)

    case GET_ALL_PHOTOS:
      // action.photos = convertPhotos(action.photos)
      return (newState.allPhotos = action.photos)
      
    default:
      return state;

  }

}