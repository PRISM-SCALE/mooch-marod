import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {Link} from "react-router-dom";
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
import Logo from "../Logo";
import Sidebar from "./Sidebar";

interface Props {
	window?: () => Window;
	children: React.ReactNode;
}

function ElevationScroll(props: Props) {
	const {children, window} = props;
	// const theme = useTheme();
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
			backgroundColor: trigger ? "#111" : "transparent",
		},
	});
}

export default function Navbar(props: Props) {
	const theme = useTheme();
	const trigger = useScrollTrigger();
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
								height: trigger ? {xs: "80px", md: "80px"} : {xs: "80px", md: "100px"},
								...spaceBetween,
								transition: "all .3s ease-out",
							}}
							disableGutters
						>
							<>
								<Box>
									<Link to={ROOT_LINK}>
										<Logo width={{xs: 60, md: 100}} height={{xs: 60, md: 100}} logo={logo_white} />
									</Link>
								</Box>

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
										component={Link}
										to="https://wa.link/hfy0aw"
										target="_blank"
										sx={{
											backgroundColor: theme.palette.custom.paratha,
											borderRadius: 30,
											px: {xs: 2, md: 4},
											py: 1,
											color: "white",
											mt: {xs: 2, md: 4},
											fontSize: {xs: ".6rem", sm: ".8rem", md: "1rem"},
											fontWeight: 400,
											"&:hover": {
												backgroundColor: theme.palette.custom.paratha,
											},
											mr: 2,
										}}
										disableElevation
										// disableRipple
									>
										Book a table
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
