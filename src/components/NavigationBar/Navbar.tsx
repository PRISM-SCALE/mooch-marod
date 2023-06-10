import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {AppBar, Toolbar, Box, Button, Container, IconButton} from "@mui/material";
import {useTheme} from "@mui/material/styles";

// HOOKS
import {useResponsive} from "../../hooks/useResponsive";

// UTILS
import {ROOT_LINK} from "../../utils/links";
import {logo_white} from "../../utils/common";

// COMPONENTS
import NavbarList from "./NavbarList";
import Iconify from "../Iconify";
import {Link} from "react-router-dom";
import Logo from "../Logo";
import Sidebar from "./Sidebar";

interface Props {
	window?: () => Window;
	children: React.ReactNode;
}

function ElevationScroll(props: Props) {
	const {children, window} = props;
	const theme = useTheme();
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
		target: window ? window() : undefined,
	});

	if (!children) {
		return null;
	}

	return React.cloneElement(children as React.ReactElement, {
		elevation: trigger ? 4 : 0,
		style: {
			backgroundColor: trigger ? theme.palette.custom.achar : "transparent",
		},
	});
}

export default function Navbar(props: Props) {
	const theme = useTheme();
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
	const {isMediumScreen, isSmallScreen, mediumScreenAndUp} = useResponsive();

	const handleMenuClick = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleSidebarClose = () => {
		setIsSidebarOpen(false);
	};

	const spaceBetween = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	};

	return (
		<Box component="header">
			<ElevationScroll {...props}>
				<AppBar position="fixed" sx={{top: 0}} component="nav">
					<Container maxWidth="xl">
						<Toolbar
							sx={{
								width: "100%",
								flexDirection: {xs: "row", md: "row"},
								height: {xs: "60px", md: "80px"},
								...spaceBetween,
							}}
							disableGutters
						>
							<>
								<Link to={ROOT_LINK}>
									<Logo width={{xs: 60, md: 80}} height={{xs: 60, md: 80}} logo={logo_white} />
								</Link>

								{isSmallScreen === !isMediumScreen ? (
									<IconButton sx={{color: "white"}} onClick={handleMenuClick}>
										<Iconify icon={"gg:menu-right"} size={24} />
									</IconButton>
								) : null}

								{!mediumScreenAndUp && (
									<Sidebar anchor="right" onClose={handleSidebarClose} open={isSidebarOpen} />
								)}

								{/* {isMediumScreen !== isSmallScreen ? null : <SearchBar />} */}
								{isMediumScreen !== isSmallScreen ? null : <NavbarList />}

								{isMediumScreen !== isSmallScreen ? null : (
									<Button
										sx={{
											backgroundColor: theme.palette.custom.paratha,
											borderRadius: 30,
											px: 4,
											py: 1,
											color: "white",
											fontSize: ".8rem",
											fontWeight: 400,

											"&:hover": {
												backgroundColor: theme.palette.custom.paratha,
											},
										}}
										disableElevation
										disableRipple
									>
										Own A Franchise
									</Button>
								)}
							</>
						</Toolbar>
					</Container>
				</AppBar>
			</ElevationScroll>

			{/* <Toolbar sx={{height: "80px", backgroundColor: "transparent"}} /> */}
		</Box>
	);
}
