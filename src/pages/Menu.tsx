import {Box} from "@mui/material";
import PageHeader from "../sections/PageHeader";
import MenuDasboard from "../sections/Menu/MenuDasboard";

const Menu = () => {
	return (
		<Box>
			<PageHeader tagline="Choose your delicacy" title="JABARDAST MENU" />
			<MenuDasboard />
		</Box>
	);
};

export default Menu;
