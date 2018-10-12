import axios from 'axios';

const GET_USER_INFO = "GET_USER_INFO";
const GET_POST_BY_ID = "GET_POST_BY_ID";
const GET_POSTS_BY_USER = "GET_POSTS_BY_USER";

const initialState = {
  username: '',
  id: null,
  profilePic: '',
  userPosts: []
};

export default function reducer(state = initialState, action)
{
  switch(action.type)
  {
    case `${GET_USER_INFO}_FULFILLED`:
      if(action.payload.data){
        return {
          ...state,
          id: action.payload.data.userID,
          username: action.payload.data.userName,
          profilePic: action.payload.data.userPic
        };
      }
      else return {
        ...state
      };
    case `${GET_POST_BY_ID}_FULFILLED`:
      console.log('GET_POST_BY_ID', action.payload);
      return {
        ...state
      };
    case `${GET_POST_BY_ID}_REJECTED`:
      console.log('Error - GET_POST_BY_ID_REJECTED');
      return state;
    case `${GET_POSTS_BY_USER}_FULFILLED`:
      console.log('hit');
      return {
        ...state,
        userPosts: action.payload.data
      };
    case `${GET_POSTS_BY_USER}_REJECTED`:
      console.log('Error - GET_POSTS_BY_USER_REJECTED');
      return state;
    default:
      return state;
  }
}

export function getUserInfo() {
  return {
    type: GET_USER_INFO,
    payload: axios.get('/api/auth/me')
  };
}

export function getPostByID(id) {
  return {
    type: GET_POST_BY_ID,
    payload: axios.get(`/api/post/${id}`)
  };
}

export function getPostsByUser(userId) {
  console.log('userId', userId);
  return {
    type: GET_POSTS_BY_USER,
    payload: axios.get(`/api/posts/${userId}`)
  };
}