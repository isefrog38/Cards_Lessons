import React from 'react';
import {
    AddCardInputWrapper,
    ButtonCancel,
    ButtonSave,
    ButtonsBlock,
    Close,
    Input,
    InputWrapper,
    Modal,
    ModalTextWrapper,
    ModalWindow,
    ModalWrapper,
    WrapperTextAndClose
} from "../../StylesComponents/ModalWrappers";
import {colors} from "../../StylesComponents/Colors";
import {FormWrapper, TextAuthWrapper} from "../../StylesComponents/AuthCardWrapper";
import {useTypedDispatch} from "../../../Store-Reducers/Store";
import {useFormik} from "formik";
import {CardFormikErrorType} from "../../../Types/CardTypes";
import {createCardTC} from "../../../Thunk's/CardsThunk";

type AddCardModalType = {
    cardsPack_id: string
    setShow: (show: boolean) => void
}

export const AddCardModal = ({setShow, cardsPack_id}: AddCardModalType) => {

    const dispatch = useTypedDispatch();
    const maxLengthInput = 100;

    const closeModalClick = () => setShow(false);

    const loginForm = useFormik({
        initialValues: {question: '', answer: ''},
        validate: (values: CardFormikErrorType) => {
            const errors: CardFormikErrorType = {};
            if (!values.question) {
                errors.question = "Field is required";
            }
            if (!values.answer) {
                errors.answer = "Field is required";
            }
            return errors;
        },
        onSubmit: ({question, answer}) => {
             dispatch(createCardTC({answer, question, cardsPack_id}));
            setShow(false);
        },
    });

    return (
        <ModalWrapper>
            <ModalWindow>
                <FormWrapper onSubmit={loginForm.handleSubmit}>
                    <Modal>
                        <WrapperTextAndClose>
                            <ModalTextWrapper>Add Card</ModalTextWrapper>
                            <Close onClick={closeModalClick}/>
                        </WrapperTextAndClose>

                        <InputWrapper>
                            <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Question</TextAuthWrapper>
                            <Input maxLength={maxLengthInput}
                                   type="text"
                                   id="question"
                                   placeholder={"Question"}
                                   {...loginForm.getFieldProps("question")}
                            />
                        </InputWrapper>

                        <AddCardInputWrapper>
                            <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Answer</TextAuthWrapper>
                            <Input maxLength={maxLengthInput}
                                   type="text"
                                   id="answer"
                                   placeholder={"Answer"}
                                   {...loginForm.getFieldProps("answer")}
                            />
                        </AddCardInputWrapper>


                        <ButtonsBlock>
                            <ButtonCancel onClick={closeModalClick}>
                                Cancel
                            </ButtonCancel>
                            <ButtonSave type="submit"
                                        disabled={!(loginForm.isValid && loginForm.dirty)}>
                                Save
                            </ButtonSave>
                        </ButtonsBlock>
                    </Modal>
                </FormWrapper>
            </ModalWindow>
        </ModalWrapper>
    );
};