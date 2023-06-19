import { createSlice } from "@reduxjs/toolkit";
import {authOperation} from './authOperation';

const initialState ={
    user: {name: null, email: null},
    tocken: null,
    isLoggedIn: false,
}

const authSlise = createSlice({
    name:"auth",
    initialState,
    extraReducers:{
        [authOperation.register.fulfilled](state, action){
            

        }
    },
});

export default authSlise.reducer;