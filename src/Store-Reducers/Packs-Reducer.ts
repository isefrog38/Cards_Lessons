import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterPacksType, OnePacksType, ParamsPacksType, ResponsePacksType} from "../Types/PacksTypes";

export type PacksInitialStateType = {
    packs: OnePacksType[]
    minCardsCount: number
    maxCardsCount: number
    packsType: FilterPacksType
    params: ParamsPacksType
    cardPacksTotalCount: number
    isFetching: boolean
};

const initialPacksState: PacksInitialStateType = {
    packs: [] as OnePacksType[],
    minCardsCount: 0,
    maxCardsCount: 103,
    packsType: 'My' as FilterPacksType,
    params: {
        packName: '',
        min: 0,
        max: 103,
        sortPacks: '0updated',
        page: 1,
        pageCount: 10,
        user_id: '',
    } as ParamsPacksType,
    cardPacksTotalCount: 0,
    isFetching: false
};

const PacksSlice = createSlice({
    name: "PacksSlice",
    initialState: initialPacksState,
    reducers: {
        setPacksDataAC(state, action: PayloadAction< ResponsePacksType >) {
            state.packs = action.payload.cardPacks;
            state.minCardsCount = action.payload.minCardsCount;
            state.maxCardsCount = action.payload.maxCardsCount;
            state.cardPacksTotalCount = action.payload.cardPacksTotalCount;
        },
        setChangeFilteredPageAC(state, action: PayloadAction<{ valueFilter: FilterPacksType }>) {
            state.packsType = action.payload.valueFilter
        },
        setFetchingPacksTableAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        },
        searchPacksTableAC(state, action: PayloadAction<{ packName: string }>) {
            state.params.packName = action.payload.packName
        },
        getOnePagePacksAC(state, action: PayloadAction<{ page: number }>) {
            state.params.page = action.payload.page
        },
        setUserIdAC(state, action: PayloadAction<{ userId: string }>) {
            state.params.user_id = action.payload.userId
        },
        setMinCardsFilterAC(state, action: PayloadAction<{ min: number, max: number }>) {
            state.params.min = action.payload.min;
            state.params.max = action.payload.max;
        },
        setTitleForSearchAC(state, action: PayloadAction<{ title: string }>) {
            state.params.packName = action.payload.title;
        },
        setPageCountAC(state, action: PayloadAction<{ pageCount: number }>) {
            state.params.pageCount = action.payload.pageCount;
        },
        setFilteredColumnAC(state, action: PayloadAction) {
            state.params.sortPacks = state.params.sortPacks === '0updated' ? '1updated' : '0updated';
        },
    },
});


export const PacksReducer = PacksSlice.reducer;


export const {setFetchingPacksTableAC, setTitleForSearchAC, setPacksDataAC, setUserIdAC, setMinCardsFilterAC,
    searchPacksTableAC, setChangeFilteredPageAC, getOnePagePacksAC,setPageCountAC, setFilteredColumnAC} = PacksSlice.actions;
