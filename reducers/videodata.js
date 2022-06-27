import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const getVideodata = createAsyncThunk(
    'videos/getVideo',
    async()=>{
        const response = await fetch('http://localhost:3001/show');
        const videoResponse = await response.json();
        return videoResponse;
    }
)

const videoSlice = createSlice({
    name:'videoSlice',
    initialState :{
        videos:[],
        isLoading:false,
    },
    reducers :{
    
      comment:(state , action )=>{
        state.videos[action.payload.index].comment.push(action.payload.x);
      },
      deleteCMT:(state , action)=>{
       state.videos[action.payload.index].comment = state.videos[action.payload.index].comment.filter(item => item.comment !== action.payload.x.comment)
      }
       
      },
    extraReducers :{
        [getVideodata.pending] : (state)=>{
           state.isLoading = true
        },
        [getVideodata.fulfilled] :(state , action) =>{
            state.videos = action.payload;
            state.isLoading = false;
        },

        [getVideodata.rejected] : (state) =>{
            state.isLoading = false;
        }
    }
})
export default videoSlice;