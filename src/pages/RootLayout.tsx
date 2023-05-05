import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

// SECTIONS
import Navbar from "../components/NavigationBar/Navbar";
import Footer from "../sections/Footer";

const RootLayout = () => {
	return (
		<>
			{/* Navigation */}
			<Navbar />
			<Box component="main" id="main_start">
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};

export default RootLayout;
