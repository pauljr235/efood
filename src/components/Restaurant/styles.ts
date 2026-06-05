import styled from "styled-components";
import { colors } from "../../styles";
import { ButtonLink } from "../Button/styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  max-width: 472px;
  display: block;
  background-color: ${colors.white};
  position: relative;

    ${TagContainer} {
    font-size: 12px;
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  display: block;
  height: 217px;
`;
export const CardInfo = styled.div`
  padding: 8px;
  color: ${colors.pink};
  border: 2px solid ${colors.pink};
  border-top: none;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weigth: bold;
  margin-bottom: 16px;
`;
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400px;
  margin-bottom: 16px;
`;

export const Ratings = styled.p`
  font-size: 18px;
  font-weigth: bold;
  display: inline-flex;
  gap: 8px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  gap: 24px;
`
