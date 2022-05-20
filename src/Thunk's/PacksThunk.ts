import {AppRootStateType, AppThunkType} from "../Store-Reducers/Store";
import {setPacksDataAC, setFetchingPacksTableAC} from "../Store-Reducers/Packs-Reducer";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {PackAPI} from "../API/API";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";
import {FilterAllMyFunction} from "../UtilsFunction/FilterAllMyFunction";


export const getAllPacksTC = (): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));

        try {
            let {params} = getState().PacksReducer;
            const {data} = await PackAPI.getPacks(params);
            if (data) {
                dispatch(setPacksDataAC(data));
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                handleServerNetworkError(error.response.data.error, dispatch);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        }
    };

export const updatePackTC = (packId: string, values: {namePack: string, private: boolean}): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));

        try {
            let cardsPack = {_id: packId, name: values.namePack, private: values.private};
            const {data} = await PackAPI.updatePack(cardsPack);
            if (data) {
                FilterAllMyFunction(dispatch, getState);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
                dispatch(setAppSuccessMessageAC({success: "Packs name is changed"}));
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                handleServerNetworkError(error.response.data.error, dispatch);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        }
    };

export const detelePackTC = (id: string): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));

        try {
            const response = await PackAPI.deletePack(id);
            if (response) {
                FilterAllMyFunction(dispatch, getState)
                dispatch(setFetchingPacksTableAC({isFetching: false}));
                dispatch(setAppSuccessMessageAC({success: "Pack is deleted"}));
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                handleServerNetworkError(error.response.data.error, dispatch);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        }
    };

export const createPackTC = (values: {namePack: string, private: boolean}): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

        dispatch(setFetchingPacksTableAC({isFetching: true}));

        try {
            let cardsPack = {name: values.namePack, private: values.private};
            const response = await PackAPI.createPack(cardsPack);
            if (response) {
                FilterAllMyFunction(dispatch, getState);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
                dispatch(setAppSuccessMessageAC({success: "Pack is added"}));
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                handleServerNetworkError(error.response.data.error, dispatch);
                dispatch(setFetchingPacksTableAC({isFetching: false}));
            }
        }
    };

