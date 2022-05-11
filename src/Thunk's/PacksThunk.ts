import {AppThunkType} from "../Store-Reducers/Store";
import {setPacksDataAC, setFetchingPacksTableAC} from "../Store-Reducers/Packs-Reducer";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardAPI} from "../API/API";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";


export const SearchPackTC = (namePack: string): AppThunkType => async dispatch => {

}

export const detelePackTC = (id: string): AppThunkType => async dispatch => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await CardAPI.deletePack(id);
        if (response) {
            dispatch(getAllPacksTC());
            dispatch(setFetchingPacksTableAC({isFetching: false}));
            dispatch(setAppSuccessMessageAC({success: "Pack is deleted"}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
};

export const createPackTC = (name: string): AppThunkType => async dispatch => {
    dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        const response = await CardAPI.createPack({name});
        if (response) {
            dispatch(getAllPacksTC());
            dispatch(setFetchingPacksTableAC({isFetching: false}));
            dispatch(setAppSuccessMessageAC({success: "Pack is added"}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
}


export const getAllPacksTC = (): AppThunkType => async dispatch => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        let pageCount = 10;
        const response = await CardAPI.getPacks(pageCount);
        if (response.data) {
            dispatch(setPacksDataAC(response.data));
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
};


export const getOnePagePacksTC = (numberPage: number): AppThunkType => async dispatch => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));
    try {
        let pageCount = 10;
        const response = await CardAPI.getPacks(pageCount, numberPage);
        if (response.data) {
            dispatch(setPacksDataAC(response.data));
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
            dispatch(setFetchingPacksTableAC({isFetching: false}));
        }
    }
};