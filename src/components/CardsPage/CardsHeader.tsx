import React, {useState} from 'react';
import {TitleProfileWrapper} from "../StylesComponents/ProfileAndPacksWrapper";
import {SearchBlock} from "../StylesComponents/CardsWrapper";
import {SearchField} from "../Common/SearchInput/SearchInput";
import styled from "styled-components";
import ImgArrow from "../../Assets/Vector1.png";
import {getOnePagePacksAC, PacksInitialStateType} from "../../Store-Reducers/Packs-Reducer";
import {CardsInitialStateType, setCardsAnswerSearch, setCardsQuestionSearch} from "../../Store-Reducers/Cards-Reducer";
import {getCardsTC} from "../../Thunk's/CardsThunk";
import {useAppSelector, useTypedDispatch} from "../../Store-Reducers/Store";
import {useNavigate} from "react-router-dom";
import {Button} from "../Common/Buttons/Button";
import {AddCardModal} from "../ModalWindow/AddCardModal/AddCardModal";
import {initialStateAuthorizationType} from "../../Store-Reducers/Auth-Reducer";

export const CardsHeader = () => {

    const [showAddCard, setShowAddCard] = useState(false);
    const statePacks = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);
    const stateCards = useAppSelector<CardsInitialStateType>(state => state.CardsReducer);
    const {_id} = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();


    const onArrowClick = () => navigate(-1);

    const onChangeWillDebounceQuestions = (title: string) => {
        dispatch(getOnePagePacksAC({page: 1}));
        dispatch(setCardsQuestionSearch({title}));
        dispatch(getCardsTC());
    };
    const onChangeWillDebounceAnswers = (title: string) => {
        dispatch(getOnePagePacksAC({page: 1}));
        dispatch(setCardsAnswerSearch({title}));
        dispatch(getCardsTC());
    };

    return (
        <>
            <NamePackBlock>
                <ArrowAndTextWrapper>
                    <Arrow onClick={onArrowClick}/>
                    <TitleProfileWrapper fontSz={1.5}>
                        {statePacks.packs.find(el => el._id === stateCards.params.cardsPack_id)?.name}
                    </TitleProfileWrapper>
                </ArrowAndTextWrapper>

                {stateCards.packUserId === _id
                    && <Button name={'Add new card'} onClick={() => setShowAddCard(true)}/>
                }
            </NamePackBlock>

            {showAddCard
                ? <AddCardModal cardsPack_id={stateCards.params.cardsPack_id} setShow={setShowAddCard}/>
                : <></>
            }

            <SearchBlock>
                <SearchField margin={"0"}
                             width={'49%'}
                             stateValue={stateCards.params.cardQuestion}
                             onChangeWithDebounce={onChangeWillDebounceQuestions}
                             placeholder={"Search Questions..."}
                />
                <SearchField margin={"0"}
                             width={'49%'}
                             stateValue={stateCards.params.cardAnswer}
                             onChangeWithDebounce={onChangeWillDebounceAnswers}
                             placeholder={"Search Answer..."}
                />
            </SearchBlock>
        </>
    );
};


const ArrowAndTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
`;

const NamePackBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.div`
  cursor: pointer;
  position: relative;
  background: url(${ImgArrow}) no-repeat;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  margin-right: 20px;
  transition: 1s all;
  border: 1px dashed #ffffff;

  &:hover {
    border-radius: 5px;
    border: 1px dashed #21268F;
  }
`;