import {Box} from "@mui/material";

// COMPONENTS
import NavItem from "./NavItem";

// Navigation Links
import {ROOT_LINK, menuLinks} from "../../utils/links";
import Logo from "../Logo";
import {Link} from "react-router-dom";

const NavbarList = () => {
	const firstThree = [...menuLinks.slice(0, 3)];
	const lastThree = [...menuLinks.slice(-3)];
	return (
		<Box
			textAlign={"center"}
			sx={{
				display: "flex",
				alignItems: "center",
				// "& > *:not(:last-child)": {
				// 	marginRight: {xs: 0, md: "2rem"},
				// },
				columnGap: 4,
			}}
		>
			{firstThree.map(({link, path}, key) => (
				<NavItem link={link} path={path} key={key} />
			))}
			<Link to={ROOT_LINK}>
				<Logo />
			</Link>
			{lastThree.map(({link, path}, key) => (
				<NavItem link={link} path={path} key={key} />
			))}
		</Box>
	);
};

export default NavbarList;
