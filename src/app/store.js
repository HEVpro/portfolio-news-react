import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/users';

export default configureStore({
    reducer: {
      user: userReducer,
    },
  });