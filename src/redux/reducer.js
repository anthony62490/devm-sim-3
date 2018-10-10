import axios from 'axios';

const initialState = {
  username: '',
  id: null,
  profilePic: ''
};

export default function reducer(state = initialState, action)
{
  switch(action.type)
  {
    default:
      return state;
  }
}