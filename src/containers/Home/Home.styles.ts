import styled from "styled-components";
import { sectionStyle } from "../../theme";

export const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 100%;
  padding: 50px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.color.text};
`;

export const SariDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1344px;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 30px;
`;

export const DetailsSection = styled.div`
  ${sectionStyle}
  width:100%;
  padding: 0 20px;
`;
