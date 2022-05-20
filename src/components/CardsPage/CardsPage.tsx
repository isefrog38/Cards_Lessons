import React, {useEffect} from 'react';
import {CardsPageWrapper, CardsWrapper, PaginationBlock} from '../StylesComponents/CardsWrapper';
import {useAppSelector, useTypedDispatch} from "../../Store-Reducers/Store";
import {CardsInitialStateType, getOnePageCardsAC,} from "../../Store-Reducers/Cards-Reducer";
import {getCardsTC} from "../../Thunk's/CardsThunk";
import {NotAuthRedirect} from "../../UtilsFunction/RedirectFunction";
import {Pagination} from "../Common/Pagination";
import {CardsTable} from "./CardsTable/CardsTable";
import {CardsHeader} from "./CardsHeader";

export const CardsPage = NotAuthRedirect(() => {

    const stateCards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getCardsTC());
    }, []);

    const onPageChanged = (page: number) => {
        dispatch(getOnePageCardsAC({page}));
        dispatch(getCardsTC());
    }

    return (
        <CardsPageWrapper>
            <CardsWrapper>

                <CardsHeader />

                <CardsTable stateCards={stateCards}/>

                <PaginationBlock>
                    <Pagination portionSize={stateCards.params.pageCount}
                                totalItemsCount={stateCards.cardsTotalCount}
                                pageSize={stateCards.params.pageCount}
                                onPageChanged={onPageChanged}
                                currentPage={stateCards.params.page}/>
                </PaginationBlock>

            </CardsWrapper>
        </CardsPageWrapper>
    );
});