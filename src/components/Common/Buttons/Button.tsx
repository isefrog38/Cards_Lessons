import React from 'react';
import styled from "styled-components";
import {colors} from "../../StylesComponents/Colors";

type ButtonClearType = {
    name: string
    onClick: () => void
}

export const Button = ({onClick, name}: ButtonClearType) => {
    return (
        <ButtonAddNewPack onClick={onClick}>{name}</ButtonAddNewPack>
    );
};


const ButtonAddNewPack = styled.button<{width?: number}>`
  width: 20%;
  height: 2vw;
  font-size: 0.8vw;
  background-color: ${colors.Blue};
  color: ${colors.WhiteColor};
  border-radius: 2vw;
  letter-spacing: 0.7px;
  border: none;
  cursor: pointer;`