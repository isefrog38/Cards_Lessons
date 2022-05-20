import React, {useState, KeyboardEvent, useEffect} from "react";
import OutsideAlerter from "./Hook/useClose";
import styled from "styled-components";
import {colors} from "../components/StylesComponents/Colors";

type SelectPropsType = {
    value: any
    onChange: (value: number) => void
    items: number[]
}

export const PageSelect = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i === props.value)
    const hoveredItem = props.items.find(i => i === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const onClickItems = (value: any) => {
        props.onChange(value);
        setActive(!active)
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (e.key === 'ArrowDown') {
                if (props.items[i] === hoveredItem) {
                    if (props.items[i + 1]) {
                        setHoveredElement(props.items[i + 1])
                        return
                    }
                }
            }
            if (e.key === 'ArrowUp') {
                if (props.items[i] === hoveredItem) {
                    if (props.items[i - 1]) {
                        setHoveredElement(props.items[i - 1])
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0])
            }
        }
        if (e.key === 'Enter') {
            setActive(false)
            props.onChange(hoveredElement)
        }
        if (e.key === 'Escape') {
            setActive(false)
        }
    }

    const outsideHandler = () => {
        setActive(false)
    }

    // const ClassName = active ? s.main_active : s.main

    return (
        <OutsideAlerter outsideHandler={outsideHandler}>
            <Select
                onKeyUp={onKeyUp} tabIndex={0}>
                <Main
                    active={active}
                    onClick={() => setActive(!active)}>
                    {selectedItem && selectedItem}
                </Main>

                {active &&
                    <Items>
                        {props.items.map(i =>
                            <Option
                                active={hoveredItem === i}
                                key={i}
                                onClick={() => {
                                    onClickItems(i)
                                }}>
                                {i}
                            </Option>)}
                    </Items>}
            </Select>
        </OutsideAlerter>
    )
}

const Select = styled.div`
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3vw;
  position: absolute;
  border: 0.15vw solid ${colors.Blue};
  border-top: none;
  border-radius: 0 0 0.15vw 0.15vw;
  background-color: ${colors.Lavender};
  cursor: pointer;`

const Main = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.15vw solid ${colors.Blue};
  height: 1.5vw;
  width: 3vw;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${({active}) => active ? '0.2vw 0.2vw 0 0' : '0.2vw'};
  border-bottom: ${({active}) => active && 'none'};
  background-color: ${({active}) => active && colors.Lavender};

  :hover {
    box-shadow: 0 0 3px black;
    cursor: pointer;
  }
`

const Option = styled.div<{ active: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({active}) => active && colors.FilterButtonColor};
  color: ${({active}) => active && 'white'};

  :hover {
    background-color: ${colors.FilterButtonColor};
  }
`