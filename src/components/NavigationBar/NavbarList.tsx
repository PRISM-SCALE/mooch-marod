import {Box} from "@mui/material";

// COMPONENTS
import NavItem from "./NavItem";

// Navigation Links
import {menuLinks} from "../../utils/links";

const NavbarList = () => {
	// const firstThree = [...menuLinks.slice(0, 3)];
	// const lastThree = [...menuLinks.slice(-3)];
	return (
		<Box
			textAlign={"center"}
			sx={{
				display: "flex",
				alignItems: "center",
				// "& > *:not(:last-child)": {
				// 	marginRight: {xs: 0, md: "2rem"},
				// },
				columnGap: 2,
			}}
		>
			{menuLinks.map(({link, path}, key) => (
				<NavItem link={link} path={path} key={key} />
			))}
		</Box>
	);
};

export default NavbarList;
