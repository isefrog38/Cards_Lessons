import {AppRootStateType, AppThunkType} from "../Store-Reducers/Store";
import axios from "axios";
import {handleServerNetworkError} from "../UtilsFunction/Error-Utils";
import {CardsAPI} from "../API/API";
import {setCardsDataAC, setFetchingCardsTableAC} from "../Store-Reducers/Cards-Reducer";
import {RequestCardPostType, RequestCardUpdateType} from "../Types/CardTypes";
import {setAppSuccessMessageAC} from "../Store-Reducers/App-Reducer";

export const getCardsTC = (): AppThunkType =>
    async (dispatch, getState: () => AppRootStateType) => {

    dispatch(setFetchingCardsTableAC({ isFetching: true }));

    try {
        let params = getState().CardsReducer.params;
        const {data} = await CardsAPI.getCards(params);
        if (data) {
            dispatch(setCardsDataAC(data));
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};

export const deleteCardTC = (id: string): AppThunkType => async dispatch => {

    dispatch(setFetchingCardsTableAC({ isFetching: true }));

    try {
        const {data} = await CardsAPI.deleteCard(id);
        if (data) {
            dispatch(getCardsTC());
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
            dispatch(setAppSuccessMessageAC({success: "Card is deleted"}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};

export const createCardTC = (card: RequestCardPostType): AppThunkType => async dispatch => {

    dispatch(setFetchingCardsTableAC({ isFetching: true }));

    try {
        const {data} = await CardsAPI.createCard(card);
        if (data) {
            dispatch(getCardsTC());
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
            dispatch(setAppSuccessMessageAC({success: "Card is added"}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};

export const updateCardTC = (card: RequestCardUpdateType): AppThunkType => async dispatch => {

    dispatch(setFetchingCardsTableAC({ isFetching: true }));

    try {
        const {data} = await CardsAPI.updateCard(card);
        if (data) {
            dispatch(getCardsTC());
            dispatch(setFetchingCardsTableAC({ isFetching: false }));
            dispatch(setAppSuccessMessageAC({success: "Card is edited"}));
        }
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            handleServerNetworkError(error.response.data.error, dispatch);
        }
    }
};
