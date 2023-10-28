import "./styles.css";
import { useState } from "react";
import GiphyFetchComponent from "./components/GiphyFetchComponent";
import TrendingComponent from "./components/TrendingComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/components/globalStyles";
import { lightTheme, darkTheme } from "../src/components/Theme";
import Button from "../src/libs/Button";

export default function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Button onClick={themeToggler}>Switch Theme</Button>

          <Router>
            <Route path="/trending" component={TrendingComponent} exact />
            <Route path="/" component={GiphyFetchComponent} exact />
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}
