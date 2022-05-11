import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import styled from "styled-components";
import {colors} from "../components/StylesComponents/Colors";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    onChangeRange2?: (value: number) => void
    valueMin: number
    valueMax: number

}

export const DoubleRange = ({onChangeRange, onChangeRange2, valueMin, valueMax,}: SuperDoubleRangePropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange2 && onChangeRange2(+e.currentTarget.value)
    }

    return (
        <DoubleRangeWrapper>
            <NumberValue>
                <ValueWrapper value={valueMin} count={-2}>
                    <Value>{valueMin}</Value>
                </ValueWrapper>
                <ValueWrapper value={valueMax} count={-7}>
                    <Value>{valueMax}</Value>
                </ValueWrapper>
            </NumberValue>
            <Slider/>
            <RangeInput>
                <Input index={valueMin < valueMax ? 1 : 2}
                       bgCol={valueMin < valueMax ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       type={'range'}
                       id={'valueMax'}
                       onChange={onChangeCallback2}
                       value={valueMax}
                       min={'0'} max={'50'}
                />
                <Input index={valueMin > valueMax ? 1 : 2}
                       bgCol={valueMin > valueMax ? 'rgba(33, 38, 143)' : 'rgb(126, 128, 175)'}
                       id={'valueMin'}
                       type={'range'}
                       onChange={onChangeCallback}
                       min={'0'} max={'50'}
                       value={valueMin}
                />
            </RangeInput>
        </DoubleRangeWrapper>
    )
}
const DoubleRangeWrapper = styled.div``

const NumberValue = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7vw;
  color: #0a043a;
`
const ValueWrapper = styled.div<{ value: number, count: number }>`
  position: relative;
  left: ${({value}) => value * 1.85}%;
  transform: translate(${({count}) => `${count}vw`});
`
const Value = styled.label`
  //position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.2vw;
  background-color: rgb(45, 46, 70);
  width: 1.5vw;
  height: 1.5vw;
`

const Slider = styled.div`
  display: flex;
  justify-content: center;
  top: 0.5vw;
  height: 0.3vw;
  width: 10vw;
  position: relative;
  background: rgb(126, 128, 175);
  border-radius: 0.2vw;
`

const RangeInput = styled.span`
  position: relative;

  input {
    position: absolute;
    width: 10vw;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`
const Input = styled.input<{ value: number, bgCol: string, index: number }>`
  display: flex;
  justify-content: start;
  z-index: ${({index}) => index};

  ::-webkit-slider-thumb {
    height: 0.7vw;
    width: 0.7vw;
    border-radius: 50%;
    background: ${colors.DarkBlue};
    pointer-events: auto;
    -webkit-appearance: none;
  }

  :after {
    height: 0.3vw;
    width: ${({value}) => value * 1.87}%;
    position: absolute;
    top: 0.2vw;
    border-bottom-left-radius: 0.2vw;
    border-top-left-radius: 0.2vw;
    background: ${({bgCol}) => bgCol};
    content: '';
  }
`