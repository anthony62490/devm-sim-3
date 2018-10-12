import axios from 'axios';

const SAVE_USER_INFO = "SAVE_USER_INFO";

const initialState = {
  username: '',
  id: null,
  profilePic: ''
};

export default function reducer(state = initialState, action)
{
  switch(action.type)
  {
    case SAVE_USER_INFO:
      console.log(action.payload);
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        profilePic: action.payload.profile_pic
      };
    default:
      return state;
  }
}

export function saveUserInfo(userObj) {
  return {
    type: SAVE_USER_INFO,
    payload: userObj
  };
}