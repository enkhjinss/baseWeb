import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ed6c02",
        },
    },
});

const ThemeComponent = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeComponent;
