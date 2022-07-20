import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        getUsersStart: (state) =>{
            state.loading = true;
        },
        getUsersSuccess: (state, action) =>{
            state.loading = false;
            state.users = action.payload;
        },
        getUsersFailure: (state) =>{
            state.loading = false;
            state.error = true;
        }
    }
})

const userReducer = userSlice.reducer;
export const {getUsersStart, getUsersSuccess, getUsersFailure} = userSlice.actions;
export default userReducer