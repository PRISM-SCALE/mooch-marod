import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

// SECTIONS
import Footer from "../sections/Footer";

const RootLayout = () => {
	return (
		<>
			{/* Navigation */}
			<Box component="main">
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};

export default RootLayout;
