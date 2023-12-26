import styled from "styled-components";
import { ThemeType } from "../../theme";

interface ToggleButtonProps {
  currentTheme: ThemeType
}

export const ToggleButton = styled.button<ToggleButtonProps>`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 2px;
  width: 35px;
  height: 20px;
  font-weight: solid;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  align-items: center;

  > span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.color.indicator};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    position: absolute;
    left: ${({ currentTheme }) => (currentTheme === ThemeType.LIGHT ? "0" : "unset")};
    right: ${({ currentTheme }) => (currentTheme === ThemeType.DARK ? "0" : "unset")};
  }
`;