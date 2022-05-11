import React, {ChangeEvent, useState} from 'react';
import {
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
import {TextAuthWrapper} from "../../StylesComponents/AuthCardWrapper";
import {createPackTC} from "../../../Thunk's/PacksThunk";
import {useTypedDispatch} from "../../../Store-Reducers/Store";

type AddPackModalType = {
    setShow: (show: boolean) => void
}

export const AddPackModal = ({setShow}: AddPackModalType) => {

    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const dispatch = useTypedDispatch();


    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error && error.trim() !== '') setError(null)
        if (e.ctrlKey || e.key === "Enter") {
        } else {
            setError('Error value')
        }
    };

    const onChangeNewName = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null);
        setValue(e.currentTarget.value);
    }

    const closeModalClick = () => {
        setShow(false);
    }
    const saveClickHandler = () => {
        dispatch(createPackTC(value));
        setShow(false);
    }

    return (
        <div>
            <ModalWrapper>
                <ModalWindow>
                    <Modal>
                        <WrapperTextAndClose>
                            <ModalTextWrapper>Add Pack</ModalTextWrapper>
                            <Close onClick={closeModalClick}/>
                        </WrapperTextAndClose>

                        <InputWrapper>
                            <TextAuthWrapper fontSz={13} opacity={0.5} color={colors.DarkBlue}>Name pack</TextAuthWrapper>
                            <Input value={value} onKeyPress={onKeyPress} onChange={onChangeNewName}/>
                        </InputWrapper>

                        <ButtonsBlock>
                            <ButtonCancel onClick={closeModalClick}>Cancel</ButtonCancel>
                            <ButtonSave onClick={saveClickHandler}>Save</ButtonSave>
                        </ButtonsBlock>
                    </Modal>
                </ModalWindow>
            </ModalWrapper>
        </div>
    );
};