import styled from "styled-components";

export const CardWrapper = styled.div<{ width?: number, height?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 33px;
  justify-content: space-around;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  background: #F9F9FE;
  color: #2D2E46;
  border-radius: 8px`;

export const TitleAuthWrapper = styled.p<{ fontSz?: number }>`
  font-weight: 600;
  font-size: ${({fontSz}) => fontSz}px;
  color: #2D2E46`;

export const TextAuthWrapper = styled.p<{ color?: string, fontSz: number, opacity?: number, textAlign?: string }>`
  width: 100%;
  font-weight: 400;
  font-size: ${({fontSz}) => fontSz}px;
  font-style: normal;
  color: ${({color}) => color};
  opacity: ${({opacity}) => opacity};
  text-align: ${({textAlign}) => textAlign}`;

export const FormWrapper = styled.form<{ height?: number }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => height}px`;

export const RememberMeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center`;

export const ErrorWrapper = styled.div`
  width: 100%;
  color: red;
  font-size: 0.9rem`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;`
