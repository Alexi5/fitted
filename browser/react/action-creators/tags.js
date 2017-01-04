import {GET_TAGS} from '../constants';
import axios from 'axios';

export const getTags = tags => ({
  type: GET_TAGS,
  tags
});

export const searchTags = (tags) => {
  return dispatch => {
    axios.get(`/api/search/${tags}`)
      .then(res => {      
      	dispatch(getTags(res.data.tags));
      })
  };
};
