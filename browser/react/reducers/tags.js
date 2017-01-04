import {
  GET_TAGS
} from '../constants';

const initialPostState = {
  tags: null
};

export default function (state = initialPostState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_TAGS:
      return (newState.tags = action.tags)

    default:
      return state;

  }
}