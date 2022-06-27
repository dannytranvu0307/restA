import { configureStore } from '@reduxjs/toolkit'
import  userSlice from './login';
import favoriteSlice from './favorite'
import videoSlice from './videodata';



const store = configureStore({
    reducer: {
        login:userSlice.reducer,
        favorite:favoriteSlice.reducer,
        video: videoSlice.reducer
    }
  })



export default store;