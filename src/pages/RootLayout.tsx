import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

// Scroll To Top on Route change
import ScrollToTop from "../components/ScrollToTop";

// HOOKS
import {useResponsive} from "../hooks/useResponsive";

// HIGHER ORDER COMPONENTS
import PreloadImages from "../hoc/PreLoadImages";

// NAVIGATIONS
import Navbar from "../components/NavigationBar/Navbar";
import MobileNavigation from "../components/NavigationBar/Mobile/MobileNavigation";

// SECTIONS
import Footer from "../sections/Footer";

const RootLayout = () => {
	const {mediumScreenAndUp} = useResponsive();
	return (
		<>
			<ScrollToTop />
			{/* Navigation */}
			<PreloadImages />
			{mediumScreenAndUp ? <Navbar children={undefined} /> : null}
			{!mediumScreenAndUp ? <MobileNavigation /> : null}

			<Box component="main" id="main_start">
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};

export default RootLayout;
