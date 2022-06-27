
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
export const login = createAsyncThunk(
    'user/login',
    async(data)=>{
        const response = await  fetch('http://localhost:3001/user/login', {
            method: 'POST', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
      
            });
        const loginResponse = await response.json();
        
        return loginResponse;
    }
)


 const userSlice = createSlice({
    name:'loginSlice',
    initialState :{
         user :{},
         status: null, 
         warning:'',
        isLoading:false,
        favorite:[]
    },
    reducers :{
    
        addFavorite:(state, action)=>{
          state.favorite.push(action.payload)
        },
        deleteFavorite:(state , action) =>{
         state.favorite =  state.favorite.filter(item => item !== action.payload)
        },
        logOut :(state) =>{
          state.user = {};
          state.status = null;
          
          
        }
      },

      extraReducers: (builder) => {
        // Bắt đầu thực hiện action login (Promise pending)
        builder.addCase(login.pending, (state) => {
          // Bật trạng thái loading
          state.isLoading = true;
        });
    
        // Khi thực hiện action login thành công (Promise fulfilled)
        builder.addCase(login.fulfilled, (state, action) => {
          // Tắt trạng thái loading, lưu thông tin user vào store
          state.isLoading = false;
          state.status= 'logged'
          if(action.payload.erro){
            state.status= action.payload.erro
            state.warning = 'warning'
  
          }else{
            state.user = action.payload;
            state.status = 'welcome , Enjoy your music';
            state.warning ='';
            state.favorite = action.payload.user.favorite

          }
         
        });
    
        // Khi thực hiện action login thất bại (Promise rejected)
        builder.addCase(login.rejected, (state) => {
          // Tắt trạng thái loading, lưu thông báo lỗi vào store
          state.isLoading = false;
        
        });
      },
   
})

export default userSlice;