import React from 'react';
import {
    ButtonWrapper,
    ErrorWrapper,
} from "../../../StylesComponents/AuthCardWrapper";
import styled from "styled-components";
import {colors} from "../../../StylesComponents/Colors";
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {useFormik} from "formik";
import {initialStateAuthorizationType} from "../../../../Store-Reducers/Auth-Reducer";
import {AddNewAva} from "./AddNewAva/AddNewAva";
import {NewNameAndAvatarTC} from '../../../../Thunk\'s/UpdateProfile';
import {Img} from '../Profile';
import {
    ButtonProfile, CardProfileWrapper, FormProfileWrapper,
    InputProfileWrapper,
    TextProfileWrapper,
    TitleProfileWrapper
} from "../../../StylesComponents/ProfileAndPacksWrapper";

type PersonalInfoType = {
    setEditMode: (editMode: boolean) => void,
    avatar: string
    active: boolean
}
type PersonalInfoFormikType = {
    avatar?: string
    nickname?: string
    email?: string
}
export const PersonalInfo = ({setEditMode, avatar, active}: PersonalInfoType) => {

    const meAuth = useAppSelector<initialStateAuthorizationType>(s => s.AuthorizationReducer);
    const dispatch = useTypedDispatch();

    const handelClick = () => {
        setEditMode(false)
    }

    const PersonalInfo = useFormik({
        initialValues: {
            avatar: avatar,
            nickname: meAuth.name ? meAuth.name : '',
            email: meAuth.email ? meAuth.email : ''
        },
        validate: (values: PersonalInfoFormikType) => {
            const errors: PersonalInfoFormikType = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (values.email !== meAuth.email) {
                errors.email = "Enter the email that was during the registration ";
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values.nickname)
            dispatch(NewNameAndAvatarTC(values.nickname))
            PersonalInfo.resetForm();
        },
    });
    return (
        <ModalWrapper active={active}>
            <CardProfileWrapper width={20} height={28}>
                <TitleProfileWrapper fontSz={1}>Personal Information</TitleProfileWrapper>
                <FormProfileWrapper height={20} onSubmit={PersonalInfo.handleSubmit}>
                    <Img src={avatar} alt={'avatar'}/>

                    <AddNewAva id='avatar'/>


                    <InputWrapper>
                            <TextProfileWrapper fontSz={0.7} opacity={0.5}
                                             color={colors.DarkBlue}>Nickname</TextProfileWrapper>
                            <InputProfileWrapper type="text"
                                   id="nickname"
                                   placeholder="nickname"
                                   {...PersonalInfo.getFieldProps("nickname")}/>
                            {/*Errors */}
                            {PersonalInfo.touched.nickname && PersonalInfo.errors.nickname ? (
                                <ErrorWrapper>{PersonalInfo.errors.nickname}</ErrorWrapper>) : null}
                            <TextProfileWrapper fontSz={0.7} opacity={0.5} color={colors.DarkBlue}>
                                Registered Email
                            </TextProfileWrapper>
                            <InputProfileWrapper type="email"
                                   id="email"
                                   placeholder="Registered email"
                                   {...PersonalInfo.getFieldProps("email")}/>
                        {/*Errors */}
                        {PersonalInfo.touched.email && PersonalInfo.errors.email ? (
                            <ErrorWrapper>{PersonalInfo.errors.email}</ErrorWrapper>) : null}
                    </InputWrapper>
                    <ButtonWrapper>
                        <ButtonProfile width={7} height={2} bgColor={colors.AzureishWhite} color={colors.Blue}
                                onClick={handelClick}>Cancel</ButtonProfile>
                        <ButtonProfile width={7} height={2}  color={colors.Lavender} bgColor={colors.Blue}
                                type={'submit'}>Save</ButtonProfile>
                    </ButtonWrapper>
                </FormProfileWrapper>
            </CardProfileWrapper>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#E6D4DE, #5c6193);`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 10vw`