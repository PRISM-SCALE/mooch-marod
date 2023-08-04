import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {AppBar, Toolbar, Button, Container, IconButton} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Link} from "react-router-dom";

// HOOKS
import {useResponsive} from "../../hooks/useResponsive";

// UTILS
<<<<<<< HEAD
import {ROOT_LINK} from "../../utils/links";
import {WA_LINK, logo_butter} from "../../utils/common";
=======
import {HOME_LINK} from "../../utils/links";
import {logo_butter, waLink} from "../../utils/common";
>>>>>>> 08fc76f76d839b88ce93acc02ef31243255b419d

// COMPONENTS
import Logo from "../Logo";
import Iconify from "../Iconify";
import NavList from "./NavList";

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

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
		target: window ? window() : undefined,
	});

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const spaceBetween = {
		display: "grid",
		gridTemplateColumns: "auto 1fr auto",
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
							height: trigger ? {xs: "80px", md: "100px"} : {xs: "80px", md: "120px"},
							...spaceBetween,
							transition: "all .3s ease-out",

							// [theme.breakpoints.down("md")]: {
							// 	justifyContent: "center",
							// },
						}}
						disableGutters
					>
						<>
							{isMediumScreen !== isSmallScreen ? null : (
								<IconButton sx={{color: "white"}} onClick={handleClick}>
									<Iconify icon={"gg:menu-left"} size={40} />
								</IconButton>
							)}
							{isMediumScreen !== isSmallScreen ? null : (
								<NavList open={open} handleClose={handleClose} anchorEl={anchorEl} />
							)}
						</>

						<Link to={HOME_LINK} style={{textAlign: "center"}}>
							<Logo
								width={{xs: 50, md: trigger ? 80 : 90}}
								height={{xs: 50, md: trigger ? 80 : 90}}
								logo={logo_butter}
							/>
						</Link>

						{/* {isMediumScreen !== isSmallScreen ? null : <SearchBar />} */}

						{isMediumScreen !== isSmallScreen ? null : (
							<Button
								component={Link}
<<<<<<< HEAD
								to={WA_LINK}
=======
								to={waLink}
>>>>>>> 08fc76f76d839b88ce93acc02ef31243255b419d
								target="_blank"
								sx={{
									backgroundColor: theme.palette.custom.paratha,
									borderRadius: 30,
									px: 4,
									py: 1,
									color: "white",
									fontSize: ".9rem",
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
					</Toolbar>
				</Container>
			</AppBar>

			{/* <Toolbar sx={{height: "80px", backgroundColor: "transparent"}} /> */}
		</ElevationScroll>
	);
}
