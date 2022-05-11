import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterCardsType, ResponsePacksType} from "../Types/PacksTypes";

export type CardsInitialStateType = {
    data: ResponsePacksType
    searchPack?: string
    filter: FilterCardsType
    isFetching: boolean
};

const initialCardsState: CardsInitialStateType = {
    data: {
        cardPacks: [],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 1,
        pageCount: 0,
        token: '',
        tokenDeathTime: 0,
    },
    filter: "All" as FilterCardsType,
    isFetching: false,
};

const CardsSlice = createSlice({
    name: "CardsSlice",
    initialState: initialCardsState,
    reducers: {
        setPacksDataAC(state, action: PayloadAction<ResponsePacksType>) {
            state.data = action.payload
        },
        setChangeFilteredPageAC(state, action: PayloadAction<{ valueFilter: FilterCardsType }>) {
            state.filter = action.payload.valueFilter
        },
        setFetchingPacksTableAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        },
    },
});


export const PacksReducer = CardsSlice.reducer;


export const {setFetchingPacksTableAC, setChangeFilteredPageAC, setPacksDataAC} = CardsSlice.actions;
