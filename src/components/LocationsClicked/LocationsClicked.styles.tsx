import styled from "styled-components";
import { sectionStyle } from "../../theme";

export const LocationsClickedContainer = styled.div`
  ${sectionStyle}
`;

export const LocationItem = styled.li`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.text};
`;
