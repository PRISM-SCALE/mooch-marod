import {Box} from "@mui/material";

// COMPONENTS
import NavItem from "./NavItem";

// Navigation Links
import {menuLinks} from "../../utils/links";
import Logo from "../Logo";

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
			<Logo />
			{lastThree.map(({link, path}, key) => (
				<NavItem link={link} path={path} key={key} />
			))}
		</Box>
	);
};

export default NavbarList;
