import React from 'react';
import {ActiveButtonsTable} from "../ActiveButtonsTable/ActiveButtonsTable";
import {OnePacksType} from "../../../../../../Types/PacksTypes";
import {useAppSelector, useTypedDispatch} from "../../../../../../Store-Reducers/Store";
import {initialStateAuthorizationType} from "../../../../../../Store-Reducers/Auth-Reducer";
import {PATH} from "../../../../../../UtilsFunction/const-enum-path";
import {useNavigate} from "react-router-dom";
import {setCardsPackId} from "../../../../../../Store-Reducers/Cards-Reducer";
import styled from "styled-components";

type TableElementsType = {
    el: OnePacksType
}

export const TableElemets = ({el}: TableElementsType) => {

    const stateAuth = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const navigate = useNavigate();
    const dispatch = useTypedDispatch();

    const onPackClick = (id: string) => {
        dispatch(setCardsPackId({cardsPack_id: id}));
        navigate(PATH.cardsPack + `/:${id}`);
    };

    return (
        <GeneralBlock>
            <Item onClick={() => onPackClick(el._id)}>{el.name}</Item>
            <Item>{el.cardsCount}</Item>
            <Item>{el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</Item>
            <Item>{el.user_name}</Item>
            <Item> <ActiveButtonsTable el={el} myId={stateAuth._id}/> </Item>
        </GeneralBlock>
    );
};


console.log("")
const GeneralBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  &:nth-child(2n) {
    background-color: #F8F7FD;
  }
`;

const Item = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.3vw;
  padding: 0 1.2vw;
  font-size: 0.8vw;
  
  :nth-child(1) {
    cursor: pointer;
    min-width: 25%;
    justify-content: start;
  }

  :nth-child(2) {
    max-width: 13%;
  }

  :nth-child(3) {
    max-width: 16%;
  }

  :nth-child(4) {
    min-width: 20%;
  }

  :nth-child(5) {
    justify-content: end;
    min-width: 20%;
  }`