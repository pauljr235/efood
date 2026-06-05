import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.cream};
  display: block;
  width: 320px;
  font-family: 'Roboto', sans-serif;

  img {
    width: 100%;
    height: 170px;
    margin-bottom: 8px;
  }
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400px;
  line-height: 22px;
  margin-bottom: 8px;
`;
