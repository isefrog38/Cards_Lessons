import React, {useState} from 'react';
import styled from "styled-components";
import {colors} from "../StylesComponents/Colors";
import {Arrow} from "../../UtilsFunction/Arrow";

type PaginationType = {
    totalItemsCount: number
    pageSize: number
    portionSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
};

export const Pagination = ({totalItemsCount, pageSize, onPageChanged, portionSize, currentPage}: PaginationType) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPositionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPositionPageNumber = portionNumber * portionSize

    return (
        <NumbersWrapper>
            {portionNumber > 1 && <Arrow width={0.3} rotate={'135'} onClick={() => setPortionNumber(portionNumber - 1)}/>}

            {pages.filter(p => p >= leftPositionPageNumber && p <= rightPositionPageNumber)
                .map((p) => <PageWrap key={p}
                                      onClick={() => onPageChanged(p)}
                                      active={currentPage === p}>{p}</PageWrap>
                )}
            {portionCount > portionNumber &&
                <Arrow width={0.3} rotate={'-45'} onClick={() => setPortionNumber(portionNumber + 1)}/>}
        </NumbersWrapper>
    )
};

const NumbersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;`

const PageWrap = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2vw;
  height: 2vw;
  background: ${({active}) => active && colors.Blue};
  color: ${({active}) => active && colors.Lavender};
  border-radius: 10%;
  cursor: pointer;
  font-size: ${({active}) => active ? 0.9 : 0.8}vw;
  transition: all 0.3s;

  :hover {
    background: ${colors.LightPink};
    border-radius: 10%;
    color: ${colors.TextColor};
    font-size: 0.9vw;
  }`