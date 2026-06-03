import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
  background-color: ${colors.cream};
  color: ${colors.pink};
  width: 100%;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.cream};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
`;
