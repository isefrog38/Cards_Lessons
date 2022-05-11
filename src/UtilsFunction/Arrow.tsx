import React from 'react';
import styled from "styled-components";
import {colors} from "../components/StylesComponents/Colors";

export const Arrow = ({onClick, rotate}: { onClick: () => void, rotate: string }) => {
    return (
        <ArrowBlock rotate={rotate} onClick={onClick}/>
    );
};

const ArrowBlock = styled.div<{ rotate: string }>`
  border: solid ${colors.AzureishWhite};
  border-width: 0 0.2vw 0.2vw 0;
  display: inline-block;
  padding: 0.3vw;
  transform: rotate(${({rotate}) => `${rotate}deg`});
  cursor: pointer;

  :hover {
    border-color: ${colors.Blue};
  }`