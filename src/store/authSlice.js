import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = 'token';
const initialState = {
    token: localStorage.getItem(STORAGE_KEY) || null,

};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateToken: (state, action) => {
            localStorage.setItem(STORAGE_KEY, action.payload.token);
            state.token = action.payload.token;
            //TODO:nu cred ca ar trebui sa salvez tot userul in local storage, dar pentru simplitate o sa fac asta deocamdata
            state.user = action.payload.user;
        },
        resetAuth: (state) => {
            localStorage.removeItem(STORAGE_KEY);
            state.token = null;
            state.user = null;
        },
    },

})
export const { updateToken, resetAuth } = authSlice.actions;
export default authSlice.reducer;