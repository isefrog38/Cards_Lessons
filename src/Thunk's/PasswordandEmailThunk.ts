import {AppThunkType} from "../Store-Reducers/Store";
import {setAppStatusAC, setEmailAddressUserAC} from "../Store-Reducers/App-Reducer";
import {AuthAPI} from "../API/API";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import axios from "axios";
import {NavigateFunction} from "react-router-dom";
import {PATH} from "../UtilsFunction/const-enum-path";


export const RegisterTC = (email: string, password: string): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.register(email, password);
        if (response.addedUser) {
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};

export const ForgetPasswordTC = (email: string, navigate: NavigateFunction): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.forgotPassword(email);
        if (response) {
            dispatch(setAppStatusAC({status: 'succeeded'}));
            dispatch(setEmailAddressUserAC({email}));

            navigate(PATH.checkEmail);
            setTimeout(() => {
                navigate(PATH.login)
            },5000);
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};
export const NewPasswordTC = (password: string, passwordToken: string): AppThunkType => async dispatch => {

    dispatch(setAppStatusAC({status: 'loading'}));

    try {
        const response = await AuthAPI.newPassword(password, passwordToken);
        if (response.info) {
            dispatch(setAppStatusAC({status: 'succeeded'}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};