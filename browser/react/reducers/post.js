import { GET_SINGLE_POST, 
         GET_ALL_POSTS,
         CREATE_POST,
         DELETE_POST } from '../constants';


export const initialPostState = {
  selectedUser: {},
  singlePost: {},
  allPosts: [],
  newPostTitle: '',
  newPostContent: ''

};

export default function (state = initialPostState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_SINGLE_POST:
      return (newState.singlePost = action.post);

    case GET_ALL_POSTS:
      return (newState.allPosts = action.posts);

    case CREATE_POST:
      newState.newPostTitle = action.postTitle;
      newState.newPostContent = action.postContent;
      return newState

    case DELETE_POST: 
      return (newState.singlePost = action.post)

    default:
      return state;
  }

}