import {createSlice} from '@reduxjs/toolkit';
const UserSlice=createSlice({

    name:'user',
    initialState:[],
    reducers:{
        addUsers:(state,action)=>{
            state=[...state,action.payload]   
            return state;  
        },
        
    }
})
export const {addUsers}=UserSlice.actions;

export const selectUser=(state)=>state.user;

export default UserSlice.reducer;