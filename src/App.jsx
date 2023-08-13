import { ThemeProvider } from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
