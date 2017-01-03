import { GET_ALL_LISTS, GET_SINGLE_LIST,
         CREATE_LIST, GET_LIST_PHOTOS } from '../constants';

export const initialListState = {
  singleList: {},
  allLists: [],
  listPhotos: [],
  newListName: ''
};

export default function (state = initialListState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_SINGLE_LIST:
      return (newState.singleList = action.list);

    case GET_ALL_LISTS:
      return (newState.allLists = action.lists);

    case GET_LIST_PHOTOS:
      return (newState.listPhotos = action.listPhotos);

    case CREATE_LIST:
      return (newState.newListName = action.listName);
      
    default:
      return state;

  }

}