import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardsResponseType, OneCardType, ParamsCardsType} from "../Types/CardTypes";

export type CardsInitialStateType = CardsResponseType;

const initialCardsState: CardsInitialStateType = {
    cards: [] as OneCardType[],
    cardsTotalCount: 0,
    params: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 5,
        sortCards: '0grade',
        page: 1,
        pageCount: 10,
    } as ParamsCardsType,
    isFetching: false,
    packUserId: ''
};

const CardsSlice = createSlice({
    name: "CardsSlice",
    initialState: initialCardsState,
    reducers: {
        setCardsDataAC(state, action: PayloadAction<CardsResponseType>) {
            state.cards = action.payload.cards;
            state.cardsTotalCount = action.payload.cardsTotalCount;
            state.packUserId = action.payload.packUserId
        },
        setFetchingCardsTableAC(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        },
        setCardsAnswerSearch(state, action: PayloadAction<{ title: string }>) {
            state.params.cardAnswer = action.payload.title
        },
        setCardsQuestionSearch(state, action: PayloadAction<{ title: string }>) {
            state.params.cardQuestion = action.payload.title
        },
        getOnePageCardsAC(state, action: PayloadAction<{ page: number }>) {
            state.params.page = action.payload.page
        },
        setCardsPackId(state, action: PayloadAction<{ cardsPack_id: string }>) {
            state.params.cardsPack_id = action.payload.cardsPack_id
        },
    },
});


export const CardsReducer = CardsSlice.reducer;


export const {setCardsDataAC, setFetchingCardsTableAC, setCardsPackId,
    getOnePageCardsAC, setCardsAnswerSearch, setCardsQuestionSearch} = CardsSlice.actions;
