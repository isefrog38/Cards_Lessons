import React from 'react';
import {CardWrapper, TextAuthWrapper, TitleAuthWrapper} from "../../StylesComponents/AuthCardWrapper";
import {colors} from "../../StylesComponents/Colors";
import {CheckEmailIcon} from "./CheckEmailIcon";
import styled from "styled-components";
import {useAppSelector} from "../../../Store-Reducers/Store";
import {AppInitialStateType} from "../../../Store-Reducers/App-Reducer";

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: #D7D8EF`

export const CheckEmail = () => {

    const stateApp = useAppSelector<AppInitialStateType>(state => state.AppReducer);



    return (
        <CardWrapper width={413} height={468}>
            <TitleAuthWrapper fontSz={26}>It-incubator</TitleAuthWrapper>
            <IconWrapper>
                <CheckEmailIcon/>
            </IconWrapper>
            <TitleAuthWrapper fontSz={22}> Check Email </TitleAuthWrapper>
            <TextAuthWrapper textAlign={'center'}
                             opacity={0.5}
                             color={colors.DarkBlue}
                             fontSz={16}>
                {`We’ve sent an Email with instructions to ${stateApp.email}`}
            </TextAuthWrapper>
        </CardWrapper>

    )
}

