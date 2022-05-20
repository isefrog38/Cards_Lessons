import styled from "styled-components";
import SerchImg from "../../Assets/Union.svg";

export const Table = styled.div`
  height: 60.5vh;
  width: 100%;
  transition: 1s all;
  
  @media (max-width: 1550px) {
    height: 380px;
  }
`;

export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputWrapper = styled.input<{width?: string, margin?: string}>`
  height: 4vh;
  width: ${({width}) => width ? width : '90%'};
  border-radius: 0.3vw;
  margin-right: ${({margin}) => margin ? margin : "2vw"};
  background: url(${SerchImg}) no-repeat scroll 0.5vw 0.5vw;
  background-size: 1vw;
  padding-left: 2vw;
  font-size: 0.9vw;
  border: 1px solid #D9D9F1;
  opacity: 0.7;

  :nth-child(1) {
    background-color: #ECECF9;
  }
  :nth-child(2) {
    background-color: #ECECF9;
  }

  :hover {
    border: 1px solid #635D80;
  }

  :focus {
    outline: none;
    border: 1px solid #635D80;
  }
`;

export const TableItem = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ECECF9;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  align-items: center;
  width: 90%;
  height: 2.3vw;
  padding: 0 24px;
  display: flex;
`;

export const PacksBlock = styled.div`
  height: auto;
  overflow: hidden;
  min-height: 70%;
  max-height: 70%;
  width: 100%;
  margin-top: 2vw;
  box-shadow: -0.1vw -0.1vw 0.5vw #cbcbcb,
  0.1vw 0.1vw 0.5vw 0.1vw #cbcbcb;
`;


export const CardsPageWrapper = styled.div`
  margin-top: 30px;
  width: 80%;
  height: 85%;
  background: #FEFEFF;
  border-radius: 8px;
`;

export const CardsWrapper = styled.div`
  padding: 24px;
`;

export const PaginationBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3vw;`