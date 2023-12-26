import { css } from "styled-components";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark"
}

export const sectionStyle = css`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  > h2 {
    color: ${({ theme }) => theme.color.primary};
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const darktheme = {
  primary: "#00bcd4",
  secondary: "#f3f3f3",
  border: "#e0e0e0",
  text: "#fff",
  background: "#212121",
  indicator: "#FFCC00",
  tableRow: "#1a1d27"
};

const lightTheme = {
  primary: "#003366",
  secondary: "#eee",
  border: "#878787",
  text: "#000",
  background: "#fff",
  indicator: "#ccc",
  tableRow: "#f9f9f9"
};
const defaultTheme = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px"
  },
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
    circle: "50%"
  }
};
const theme = {
  dark: {
    color: darktheme,
    ...defaultTheme
  },
  light: {
    color: lightTheme,
    ...defaultTheme
  }
};

export default theme;
