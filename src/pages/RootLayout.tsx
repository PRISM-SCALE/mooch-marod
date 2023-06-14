import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

// Scroll To Top on Route change
import ScrollToTop from "../components/ScrollToTop";

// HIGHER ORDER COMPONENTS
import PreloadImages from "../hoc/PreLoadImages";

// SECTIONS
import Navbar from "../components/NavigationBar/Navbar";
import Footer from "../sections/Footer";

const RootLayout = () => {
	return (
		<>
			<ScrollToTop />
			{/* Navigation */}
			<PreloadImages />
			<Navbar children={undefined} />
			<Box component="main" id="main_start">
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};

export default RootLayout;
