import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResponseDataLoginOrAuthMe} from "../Types/AuthTypes";

export type initialStateAuthorizationType = ResponseDataLoginOrAuthMe & { isAuth: boolean };

let initialState: initialStateAuthorizationType = {
    _id: null,
    email: null,
    name: null,
    avatar: null,
    publicCardPacksCount: null,
    created: null,
    updated: null,
    isAdmin: null,
    verified: null,
    rememberMe: null,
    error: null,
    isAuth: false
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState: initialState,
    reducers: {
        addNewNameAndAvatar(state, action: PayloadAction<ResponseDataLoginOrAuthMe>) {
            return {...action.payload, isAuth: true}
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setAuthUserDataAC, (state: initialStateAuthorizationType, action: PayloadAction<ResponseDataLoginOrAuthMe>) => {
            return {...action.payload, isAuth: true}
        });
        builder.addCase(deleteUserDataAC, (state: initialStateAuthorizationType, action: PayloadAction<ResponseDataLoginOrAuthMe>) => {
            return {...action.payload, isAuth: false}
        });
    },
});

export const AuthorizationReducer = AuthSlice.reducer;
export const {addNewNameAndAvatar} = AuthSlice.actions

export const setAuthUserDataAC = createAction<ResponseDataLoginOrAuthMe>('AUTH_ME');
export const deleteUserDataAC = createAction<ResponseDataLoginOrAuthMe>('Log_OUT_ME');