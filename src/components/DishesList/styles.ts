import styled from "styled-components";
import { colors } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding-bottom: 120px;
  padding-top: 60px;
`;
export const Modal = styled.div`
  padding: 32px;
  background-color: ${colors.pink};
  color: ${colors.white};
  position: fixed;
  top: 80px;
  align-items: center;
  justify-content: center;
  display: none;

  &.visible {
    display: flex;
  }

  h4 {
    margin-bottom: 16px;
    font-size: 18px;
  }

  header {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px;
    cursor: pointer;
    img {
      height: 16px;
      width: 16px;
    }
  }

  img {
    width: 230px;
    height: 230px;
  }

  ${ButtonContainer} {
    width: 218px;
    padding: 4px;
    margin-top: 16px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  position: relative;
`;
export const ModalImg = styled.img`
  margin-right: 16px;
  display: block;
  width: 100%;
`;

export const ModalDescription = styled.p`
  width: 656px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400px;
`;
