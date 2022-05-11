import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type AppInitialStateType = {
    status: RequestStatusType,
    error: null | string,
    success: null | string,
    email: null | string,
};

const initialAppState: AppInitialStateType = {
    status: 'idle' as RequestStatusType,
    error: null,
    success: null,
    email: null,
};

const AppSlice = createSlice({
    name: "AppSlice",
    initialState: initialAppState,
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppErrorMessageAC(state, action: PayloadAction<{ error: null | string }>) {
            state.error = action.payload.error;
        },
        setAppSuccessMessageAC(state, action: PayloadAction<{ success: null | string }>) {
            state.success = action.payload.success;
        },
        setEmailAddressUserAC(state, action: PayloadAction<{ email: string }> ) {
            state.email = action.payload.email;
        },
    },
});


export const AppReducer = AppSlice.reducer;

export const {setAppErrorMessageAC, setAppStatusAC, setEmailAddressUserAC, setAppSuccessMessageAC} = AppSlice.actions;

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
