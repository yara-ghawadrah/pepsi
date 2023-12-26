import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import Home from "./containers/Home/Home";
import {
  AppContainer,
  ContentContainer,
  Title,
  TitleContainer
} from "./containers/Home/Home.styles";
import theme, { ThemeType } from "./theme";
function App() {
  const [currentTheme, setCurrentTheme] = useState(ThemeType.LIGHT);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AppContainer>
        <ContentContainer>
          <TitleContainer>
            <Title>Pepsi</Title>
            <ToggleButton
              currentTheme={currentTheme}
              onClick={() => {
                if (currentTheme === ThemeType.LIGHT) {
                  setCurrentTheme(ThemeType.DARK);
                } else {
                  setCurrentTheme(ThemeType.LIGHT);
                }
              }}
            >
              <span />
            </ToggleButton>
          </TitleContainer>
          <Home />
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
