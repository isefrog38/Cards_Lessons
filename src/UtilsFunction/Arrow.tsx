import React from 'react';
import styled from "styled-components";
import {colors} from "../components/StylesComponents/Colors";

export const Arrow = ({onClick, rotate, width}: { onClick: () => void, rotate: string, width: number }) => {
    return (
        <ArrowBlock width={width} rotate={rotate} onClick={onClick}/>
    );
};

const ArrowBlock = styled.div<{ rotate: string, width: number }>`
  border: solid ${colors.AzureishWhite};
  border-width: 0 0.2vw 0.2vw 0;
  display: inline-block;
  padding: 0.2vw;
  transform: rotate(${({rotate}) => `${rotate}deg`});
  cursor: pointer;

  :hover {
    border-color: ${colors.Blue};
  }`