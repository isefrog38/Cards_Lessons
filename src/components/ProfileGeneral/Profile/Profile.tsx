import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {NotAuthRedirect} from '../../../UtilsFunction/RedirectFunction';
import {useAppSelector, useTypedDispatch} from '../../../Store-Reducers/Store';
import {initialStateAuthorizationType} from '../../../Store-Reducers/Auth-Reducer';
import {colors} from '../../StylesComponents/Colors';
import {
    GeneralProfileWrapper,
    TextProfileWrapper,
    TitleProfileWrapper, ToolsProfileBlock
} from '../../StylesComponents/ProfileAndPacksWrapper';
import {AllPacks} from "../PacksList/AllPacks/AllPacks";
import {setUserIdAC} from "../../../Store-Reducers/Packs-Reducer";
import {getAllPacksTC} from "../../../Thunk's/PacksThunk";

export const Profile = NotAuthRedirect(() => {

    const meAuth = useAppSelector<initialStateAuthorizationType>(state => state.AuthorizationReducer);
    const [editMode, setEditMode] = useState<boolean>(false);
    const dispatch = useTypedDispatch();
    const avatar = meAuth.avatar ? meAuth.avatar : 'https://static.thenounproject.com/png/801390-200.png';

    useEffect(() => {
        if (meAuth._id) {
            dispatch(setUserIdAC({userId: meAuth._id}));
        }
        dispatch(getAllPacksTC());
    }, []);

    return (
        <>
            <GeneralProfileWrapper>
                <ToolsProfileBlock>
                    <PersonBlock>
                        <Img src={avatar} alt={'avatar'}/>
                        <TitleProfileWrapper fontSz={1}>{meAuth.name}</TitleProfileWrapper>
                        <TextProfileWrapper fontSz={0.7} opacity={0.5} color={colors.TextColor} textAlign={'center'}>Front-end
                            developer</TextProfileWrapper>
                        <EditButton onClick={() => setEditMode(true)}>Edit Profile</EditButton>
                        {editMode && <PersonalInfo active={editMode} avatar={avatar} setEditMode={setEditMode}/>}
                    </PersonBlock>
                </ToolsProfileBlock>

                <AllPacks namePage={"My packs list"}/>

            </GeneralProfileWrapper>
        </>
    )
});

const PersonBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  height: 12vw;
  width: 100%;
  border-radius: 0.4vw 0 0.8vw 0.8vw;
  z-index: 5;
  background-color: ${colors.LightPink};`

export const Img = styled.img`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  background-color: ${colors.Lavender};`

const EditButton = styled.button`
  border: 0.1vw solid ${colors.InputColor};
  color: ${colors.Blue};
  background: none;
  font-weight: 600;
  font-size: 0.7vw;
  padding: 0.3vw 0.5vw;
  border-radius: 0.2vw;
  cursor: pointer;
  transition: color 0.7s, background-color 0.7s;
  transition-delay: 0.1s;

  :hover {
    background-color: ${colors.Blue};
    color: ${colors.Lavender};
  }`


