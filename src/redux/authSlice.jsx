import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    user: JSON.parse(Cookies.get('user') || 'null'),
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            Cookies.set('user', JSON.stringify(action.payload), { expires: 1 });
        },
        register: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            Cookies.set('user', JSON.stringify(action.payload), { expires: 1 });
        },
        logout: (state) => {
            state.user = null;
            Cookies.remove('user');
        }
    },
});

export const {

    login,
    register,
    logout
} = authSlice.actions;

export default authSlice.reducer;