import React, {ChangeEvent,} from "react";
import styled from "styled-components";
import {AddNewAvaIcon} from "../../../../../Assets/AddNewAvaIcon";
import {colors} from "../../../../StylesComponents/Colors";
import {NewNameAndAvatarTC} from "../../../../../Thunk's/UpdateProfile";
import {useTypedDispatch} from "../../../../../Store-Reducers/Store";


type AddNewAvaType = {
    id?: string
    value?: any
    disabled?: any
    accept?: any
}

export const AddNewAva = ({id}: AddNewAvaType) => {
    const dispatch = useTypedDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (e.currentTarget.files)
            dispatch(NewNameAndAvatarTC(window.URL.createObjectURL(e.currentTarget.files[0])))
    }

    return (
        <NewAvatarWrapper htmlFor={id}>
            <AddNewAvaIcon/>
            <input id={id} type={'file'}
                   style={{display: 'none'}}
                   onChange={onChangeHandler}/>
        </NewAvatarWrapper>
    );
}
const NewAvatarWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 1.5vw;
  bottom: 2vw;
  width: 1.8vw;
  height: 1.8vw;
  background-color: ${colors.TextColor};
  opacity: 0.7;
  border-radius: 50%;
  border: 0.15vw solid #ffffff;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }`