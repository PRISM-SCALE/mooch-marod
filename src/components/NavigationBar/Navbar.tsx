import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {AppBar, Toolbar, Button, Container} from "@mui/material";
import {useTheme} from "@mui/material/styles";

// HOOKS
import {useResponsive} from "../../hooks/useResponsive";

// UTILS
import {ROOT_LINK} from "../../utils/links";
import {logo_white} from "../../utils/common";

// COMPONENTS
import NavbarList from "./NavbarList";
import {Link} from "react-router-dom";
import Logo from "../Logo";

interface Props {
	window?: () => Window;
	children: React.ReactNode;
}

function ElevationScroll(props: Props) {
	const {children, window} = props;
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
		component: "header",
		style: {
			width: "100%",
			background: trigger ? `url(/images/header.webp)` : "transparent",
			backgroundPosition: trigger && "center",
			backgroundRepeat: trigger && "no-repeat",
			backgroundSize: trigger && "cover",
		},
	});
}

export default function Navbar(props: Props) {
	const {window} = props;
	const theme = useTheme();
	const {isMediumScreen, isSmallScreen} = useResponsive();

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
		target: window ? window() : undefined,
	});

	const spaceBetween = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	};

	return (
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

							// [theme.breakpoints.down("md")]: {
							// 	justifyContent: "center",
							// },
						}}
						disableGutters
					>
						<>
							<Link to={ROOT_LINK}>
								<Logo
									width={{xs: 50, md: trigger ? 65 : 85}}
									height={{xs: 50, md: trigger ? 65 : 85}}
									logo={logo_white}
								/>
							</Link>

							{/* 
								{isSmallScreen === !isMediumScreen ? (
									<IconButton sx={{color: "white"}} onClick={handleMenuClick}>
										<Iconify icon={"gg:menu-right"} size={24} />
									</IconButton>
								) : null}

								{!mediumScreenAndUp && (
									<Sidebar anchor="right" onClose={handleSidebarClose} open={isSidebarOpen} />
								)} */}

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
									BOOK A TABLE
								</Button>
							)}
						</>
					</Toolbar>
				</Container>
			</AppBar>

			{/* <Toolbar sx={{height: "80px", backgroundColor: "transparent"}} /> */}
		</ElevationScroll>
	);
}
