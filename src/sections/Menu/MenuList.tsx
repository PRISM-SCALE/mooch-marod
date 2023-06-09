import {Box, Container, Grid, Typography, useTheme} from "@mui/material";

// JSON DATA
import {menu} from "../../_mock/menu.json";
import MenuDetail from "../../components/MenuDetail";
import {GroupedMenuData, groupData} from "../../utils/groupby";

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
	// Grouped data returned from 
	const groupedMenuData: GroupedMenuData = groupData(menu);

	return (
		<Box component="section" id="main_menu_section" py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
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
							<Grid container columnSpacing={4}>
								<MenuDetail menuList={menuList} />
							</Grid>
						</Box>
					);
				})}
			</Container>
		</Box>
	);
};

export default MenuList;
