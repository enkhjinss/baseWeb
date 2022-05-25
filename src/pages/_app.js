import { Box } from "@mui/system";
import "../../styles/globals.css";
import { Header } from "../components/Header";
import { BasicMenu } from "../components/Menu";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Box sx={{ display: "flex" }}>
                <BasicMenu />
                <Component {...pageProps} />
            </Box>
        </>
    );
}

export default MyApp;
