import styled from "styled-components";

export const WrapperTextAndClose = styled.div<{c?: string}>`
  display: flex;
  justify-content: ${({c}) => c ? c : 'space-between'};
`;

export const ModalTextWrapper = styled.div`
  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D2E46;
`;

export const Close = styled.div`
  position: absolute;
  right: 32px;
  top: 28px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #2D2E46;


    &:hover {
      background-color: #000000;
    }
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

`;

export const Modal = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

export const ModalWrapper = styled.div<{back?: string}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
`;

export const ModalWrapperClear = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalWindow = styled.div`
  position: relative;
  top: 30%;
  margin: 0 auto;
  width: 25%;
  height: 35%;
  background-color: #F9F9FE;
  border-radius: 5px;
`;

export const InputWrapper = styled.div`
  padding: 20% 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: 1600px) {
    padding: 10% 0 0 0;
  }
`;

export const AddCardInputWrapper = styled.div`
  padding: 10% 0 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;


export const Input = styled.input`
  width: 95%;
  height: 30px;
  background: none;
  color: #2D2E46;
  border-width: 0;
  border-color: rgba(36, 37, 74, 0.5);
  border-style: solid;
  border-bottom-width: 1px;
  outline: none
`;

export const ButtonsBlock = styled.div`
  width: 100%;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1600px) {
    margin-top: 10%;
  }
  @media (max-width: 1250px) {
    flex-wrap: wrap;
    margin-top: 10%;
  }
`;

export const ButtonSave = styled.button<{width?: string}>`
  width: ${({width}) => width ? width: "150px"};
  height: 40px;
  background-color: #21268F;
  color: #ECECF9;
  border-radius: 30px;
  letter-spacing: 0.7px;
  border: none;
  cursor: pointer;
  transition: all 1s;

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }

  @media (max-width: 1600px) {
    width: 130px;
  }

  @media (max-width: 1250px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ButtonCancel = styled.button`
  width: 150px;
  height: 40px;
  background-color: #D7D8EF;
  color: #21268F;
  border-radius: 30px;
  letter-spacing: 0.7px;
  border: none;
  cursor: pointer;
  transition: all 1s;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 1600px) {
    width: 130px;
  }

  @media (max-width: 1250px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const ButtonDelete = styled.button`
  width: 150px;
  height: 40px;
  background-color: #F1453D;
  color: #ECECF9;
  border-radius: 30px;
  letter-spacing: 0.7px;
  border: none;
  cursor: pointer;
  transition: all 1s;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 1600px) {
    width: 130px;
  }

  @media (max-width: 1250px) {
    margin-top: 10px;
    width: 100%;
  }
`;


export const WrapperText = styled.div`
  width: 100%;
  margin: 17% auto;

  @media (max-width: 1600px) {
    margin: 10% auto;
    font-size: 0.8rem;
  }
`;