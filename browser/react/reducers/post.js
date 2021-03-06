import { GET_SINGLE_POST, 
         GET_ALL_POSTS,
         CREATE_POST,
         DELETE_POST } from '../constants';


export const initialPostState = {
  selectedUser: {},
  singlePost: {},
  allPosts: [],
  postTitle: '',
  postContent: ''

};

export default function (state = initialPostState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_SINGLE_POST:
      return (newState.singlePost = action.post);

    case GET_ALL_POSTS:
      return (newState.allPosts = action.posts);

    case CREATE_POST:
      newState.postTitle = action.title;
      newState.postContent = action.content;
      return newState

    case DELETE_POST: 
      return (newState.singlePost = action.post)

    default:
      return state;
  }

}