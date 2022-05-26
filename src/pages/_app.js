import { Box } from "@mui/system";
import "../../styles/globals.css";
import { Header } from "../components/Header";
import { BasicMenu } from "../components/Menu";
import ThemeComponent from "../pages/theme";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeComponent>
            <Header />
            <Box sx={{ display: "flex" }}>
                <BasicMenu />
                <Component {...pageProps} />
            </Box>
        </ThemeComponent>
    );
}

export default MyApp;
