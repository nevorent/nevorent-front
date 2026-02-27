import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = 'token';
const initialState = {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateToken: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;

            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        },
        resetAuth: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
});
export const { updateToken, resetAuth } = authSlice.actions;
export default authSlice.reducer;