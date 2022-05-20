import React, {useEffect} from 'react';
import {useAppSelector, useTypedDispatch} from "../../../Store-Reducers/Store";
import {
    PacksInitialStateType,
    setChangeFilteredPageAC,
    setMinCardsFilterAC,
    setUserIdAC
} from "../../../Store-Reducers/Packs-Reducer";
import {AllPacks} from "./AllPacks/AllPacks";
import {GeneralProfileWrapper, TitleProfileWrapper, ToolsProfileBlock} from '../../StylesComponents/ProfileAndPacksWrapper';
import styled from 'styled-components';
import {colors} from "../../StylesComponents/Colors";
import {NotAuthRedirect} from "../../../UtilsFunction/RedirectFunction";
import {initialStateAuthorizationType} from "../../../Store-Reducers/Auth-Reducer";
import {DoubleRange} from "../../Common/DoubleRange";
import {getAllPacksTC} from "../../../Thunk's/PacksThunk";
import {FilterPacksType} from "../../../Types/PacksTypes";

export const PacksList = NotAuthRedirect(() => {

    const statePack = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);
    const {_id} = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(setUserIdAC({userId: ""}));
        dispatch(setChangeFilteredPageAC({valueFilter: 'All'}));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllPacksTC());
    },[statePack.params, statePack.packsType]);

    const onClickHandler = (valueFilter: FilterPacksType) => {
        dispatch(setChangeFilteredPageAC({valueFilter}));
        if (valueFilter === 'My' && _id) {
            dispatch(setUserIdAC({userId: _id}));
        } else {
            dispatch(setUserIdAC({userId: ""}));
        }
    };

    const active = statePack.packsType === "All";

    return (
        <GeneralProfileWrapper>
            <ToolsProfileBlock>
                <ShowPacks>
                    <TitleProfileWrapper fontSz={0.8}>Show packs cards</TitleProfileWrapper>
                    <ButtonWrapper>
                        <Button active={!active}
                                onClick={() => onClickHandler("My")}>My
                        </Button>

                        <Button active={active}
                                onClick={() => onClickHandler("All")}>All
                        </Button>
                    </ButtonWrapper>
                </ShowPacks>


                <NumberCards>
                    <TitleProfileWrapper fontSz={0.8}>Number of cards</TitleProfileWrapper>
                    {/*<DoubleRange paramsMin={statePack.params.min} paramsMax={statePack.params.max}*/}
                    {/*             minCardsCount={statePack.minCardsCount} maxCardsCount={statePack.maxCardsCount}*/}
                    {/*             dispatchAction={setMinCardsFilterAC}/>*/}
                </NumberCards>
            </ToolsProfileBlock>

            <AllPacks namePage={"Packs List"}/>

        </GeneralProfileWrapper>
    )
});

const ShowPacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 7vw;
`;

const NumberCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5vw;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button<{ active: boolean }>`
  width: 4vw;
  height: 2vw;
  border: none;
  cursor: pointer;
  font-size: 0.7vw;
  background-color: ${({active}) => active ? colors.FilterButtonColor : colors.WhiteColor};
  color: ${({active}) => active ? colors.WhiteColor : colors.TextColor};
  transition: background-color 0.5s, color 0.5s;
  transition-delay: 0.1s;`