

import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
export const showfavorite = createAsyncThunk(
    'video/favorite',
    async(token)=>{
        const response = await fetch('http://localhost:3001/showfavorite',{
            method:'GET',
            headers:{
                'auth-token': token,
                'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        });
        const favorite = await response.json();
        return favorite;
    }
       
)

const favoriteSlice = createSlice({
    name:'favorite',
    initialState :{
        videos:[1,2],
        isLoading:false,
    },
    reducer: {
        // Logout không gọi API mà chỉ đơn giản là cập nhật state
        add: (state, action) => {
          state.videos.push(action.payload) 
        },
      },
    extraReducers :{
        [showfavorite.pending] : (state)=>{
           state.isLoading = true
        },
        [showfavorite.fulfilled] :(state , action) =>{
            state.videos = action.payload;
            state.isLoading = false;
           
        },

        [showfavorite.rejected] : (state) =>{
            state.isLoading = false;
        }
    }
})
export default favoriteSlice;