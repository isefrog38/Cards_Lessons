import {Dispatch} from "redux";
import {AuthAPI} from "../API/API";
import {setAppStatusAC, setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";
import {deleteUserDataAC, setAuthUserDataAC} from "../Store-Reducers/Auth-Reducer";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {LoginDataType} from "../Types/AuthTypes";
import {AppThunkType} from "../Store-Reducers/Store";
import axios from "axios";


export const AuthMeTC = (): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));
    try {
        const response = await AuthAPI.authMe()
        if (response.data) {
            dispatch(setAuthUserDataAC(response.data))
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        dispatch(setAppStatusAC({status: 'failed'}))
    }
};

export const LoginTC = (values: LoginDataType) => async (dispatch: Dispatch) => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.authLogin(values.email, values.password, values.rememberMe);
        if (response.data) {
            dispatch(setAuthUserDataAC(response.data));
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};

export const LogOutTC = (): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.logOut()
        if (response.data.info) {
            let resetUser = {
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
            };
            dispatch(deleteUserDataAC(resetUser));
            dispatch(setAppStatusAC({status: 'succeeded'}));
            dispatch(setAppSuccessMessageAC({success: response.data.info}));
        }
    } catch (error) {
        dispatch(setAppStatusAC({status: 'failed'}));

        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};
