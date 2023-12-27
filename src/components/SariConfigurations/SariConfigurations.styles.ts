import styled from "styled-components";
import { sectionStyle } from "../../theme";

export const Text = styled.div`
  color: ${({ theme }) => theme.color.text};
`;

export const ConfigurationsContainer = styled.div`
  ${sectionStyle}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 0 20px 20px;
`;

export const InputField = styled.input`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1em;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 3px;
  padding: 5px;
  width: 40%;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 40%;

  &:hover {
    background-color: #d16284;
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  background-color: white;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
`;

export const Option = styled.option`
  padding: 8px 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.primary};
  background-color: white;
`;
