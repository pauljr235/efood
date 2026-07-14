import styled from 'styled-components'
import { colors } from '../../styles'

import trash from '../../assets/images/lixeira-de-reciclagem 1.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  display: none;

  &.isOpen {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 40px 8px;
  width: 360px;

  ul {
    padding: 0;
  }

  ${ButtonContainer} {
    cursor: pointer;
  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  margin-top: 40px;
  margin-bottom: 16px;
  font-weight: bold;
`

export const CartItem = styled.li`
  background-color: ${colors.white};
  list-style: none;
  display: flex;
  padding: 8px;
  color: ${colors.pink};
  width: 344px;
  margin-bottom: 16px;
  position: relative;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${trash});
    height: 16px;
    width: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
