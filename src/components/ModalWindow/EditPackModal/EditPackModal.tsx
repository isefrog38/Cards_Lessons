import React, {useEffect} from 'react';
import {
    ButtonCancel, ButtonSave, ButtonsBlock, Close, Input, InputWrapper, Modal,
    ModalTextWrapper, ModalWindow, ModalWrapper, WrapperTextAndClose
} from '../../StylesComponents/ModalWrappers';
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {FormikErrorType, OnePacksType} from "../../../Types/PacksTypes";
import {FormWrapper, RememberMeWrapper, TextAuthWrapper} from "../../StylesComponents/AuthCardWrapper";
import {colors} from "../../StylesComponents/Colors";
import {StyledCheckBox} from '../../LoginAndRegistration/Login/Login';
import {useFormik} from "formik";
import {updatePackTC} from "../../../Thunk's/PacksThunk";
import styled from "styled-components";

type EditPackModalType = {
    el: OnePacksType
    setShow: (show: boolean) => void
}

export const EditPackModal = ({el, setShow}: EditPackModalType) => {

    const dispatch = useTypedDispatch();
    const maxLengthInput = 30;

    const closeModalClick = () => setShow(false);

    const loginForm = useFormik({
        initialValues: {namePack: '', private: false},
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.namePack) {
                errors.namePack = "Field is required";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(updatePackTC(el._id, values));
            setShow(false);
        },
    });

    useEffect(() => {
        loginForm.setFieldValue('namePack', el.name);
    }, []);

    return (
        <ModalWrapper>
            <ModalWindow>
                <FormWrapper onSubmit={loginForm.handleSubmit}>
                    <Modal>
                        <WrapperTextAndClose>
                            <ModalTextWrapper>Edit pack</ModalTextWrapper>
                            <Close onClick={closeModalClick}/>
                        </WrapperTextAndClose>

                        <InputWrapper>
                            <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>New Pack Name</TextAuthWrapper>
                            <Input maxLength={maxLengthInput}
                                   type="text"
                                   id="namePack"
                                   placeholder={"New pack name"}
                                   {...loginForm.getFieldProps("namePack")}
                            />
                        </InputWrapper>
                        <RememberMeWrapper margin={20}>
                            <StyledCheckBox width={30} height={30}
                                            type={"checkbox"}
                                            id="private"
                                            {...loginForm.getFieldProps("private")}
                            />
                            <TextAuthWrapper fontSz={17} opacity={1}
                                             color={colors.DarkBlue}>Private</TextAuthWrapper>
                        </RememberMeWrapper>

                        <ButtonsBlock>
                            <ButtonCancel onClick={closeModalClick}>
                                Cancel
                            </ButtonCancel>
                            <ButtonSave type="submit"
                                        disabled={!(loginForm.isValid && loginForm.dirty) || el.name === loginForm.values.namePack}>
                                Save change
                            </ButtonSave>
                        </ButtonsBlock>
                    </Modal>
                </FormWrapper>
            </ModalWindow>
        </ModalWrapper>
    );
};