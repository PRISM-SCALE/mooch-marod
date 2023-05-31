import {Box} from "@mui/material";
import PageHeader from "../sections/PageHeader";
import MenuList from "../sections/Menu/MenuList";

const Menu = () => {
	return (
		<Box>
			<PageHeader tagline="Choose your menu" title="RESTAURANT MENU" />
			<MenuList />
		</Box>
	);
};

export default Menu;