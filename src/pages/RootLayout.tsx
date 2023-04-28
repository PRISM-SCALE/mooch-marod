import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

const RootLayout: FC = () => {
	return (
		<>
			{/* Navigation */}
			<Box component="main">
				<Outlet />
			</Box>
		</>
	);
};

export default RootLayout;
