import { CREATE_POST, ADD_PHOTO, ADD_LIST,
         GET_USER, GET_USER_POSTS, 
         GET_USER_PHOTOS, GET_USER_LISTS  } from '../constants';

export const initialUserState = {
  selectedUser: {},
  userLists: [],
  userPosts: [],
  userPhotos: [],
  newPost: {},
  newList: {},
  newPhoto: {} //can replace w/ single photo
};

export default function (state = initialUserState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_USER: 
      return (newState.selectedUser = action.userId);

    case GET_USER_POSTS:
      return (newState.userPosts = action.posts)

    case GET_USER_PHOTOS:
       return (newState.userPhotos = action.photos)

    case GET_USER_LISTS:
      return (newState.userLists = action.lists)

    // case CREATE_POST:
    //   return  (newState.post = action.post)

    // case ADD_LIST:
    //   return { post: action.post, 
    //            singleList: action.list }

    // case ADD_PHOTO:
    //   return { post: action.post, 
    //            singlePhoto: action.photo }

    default:
      return state;

  }

}