import {Box, Container, Typography, useTheme} from "@mui/material";

// JSON DATA
import {menu} from "../../_mock/menu.json";
import MenuDetail from "../../components/MenuDetail";

interface MenuItem {
	name: string;
	category: string;
	description: string;
	price: number;
	priority: number;
}

interface GroupedMenuData {
	[category: string]: MenuItem[];
}

interface CustomPalette {
	paratha: string;
	pani: string;
	achar: string;
	conceot: string;
}

type TabData = {
	[key: string]: string;
};

const tabData: TabData = {
	parathas: "paratha",
	lassi: "pani",
	starters: "achar",
	"food kasoot": "conceot",
};

const MenuList = () => {
	const theme = useTheme();
	const menuData: MenuItem[] = menu;

	const groupedMenuData: GroupedMenuData = {};

	menuData.forEach((menuItem) => {
		if (groupedMenuData[menuItem.category]) {
			groupedMenuData[menuItem.category].push(menuItem);
		} else {
			groupedMenuData[menuItem.category] = [menuItem];
		}
	});

	console.log(groupedMenuData);

	return (
		<Box component="section" id="main_menu_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				{/* Map sorted object */}
				{Object.entries(groupedMenuData).map(([category, menuList]) => {
					const data = tabData[category as keyof typeof tabData];
					const color = theme.palette.custom[data as keyof CustomPalette];

					return (
						<Box key={category} sx={{mb: 6}}>
							{/* Categoty Name */}
							<Typography
								variant="h3"
								color={color}
								sx={{fontSize: {xs: 24, sm: 26, md: 32}}}
								gutterBottom
							>
								{category.toUpperCase()}
							</Typography>
							{/* Menu Detail Component */}
							<MenuDetail menuList={menuList} />
						</Box>
					);
				})}
			</Container>
		</Box>
	);
};

export default MenuList;
