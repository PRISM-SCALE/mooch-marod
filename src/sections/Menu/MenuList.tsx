import {Box, Container, useTheme} from "@mui/material";

// JSON DATA
import {MM_Menu} from "../../_mock/menuV2.json";

// UTILS
// import {groupData} from "../../utils/groupby";

// COMPONENTS
import TitleWithMooch from "../../components/TitleWithMooch";
import GroupedMenu from "../../components/Menu/GroupedMenu";

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
	make_your_own_paratha: "pani",
	kebabs: "achar",
	lassi: "conceot",
};

const MenuList = () => {
	const theme = useTheme();
	// Grouped data returned from
	// const groupedMenuData: GroupedMenuData = groupData(MM_Menu);

	return (
		<Box component="section" id="main_menu_section" py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
				{/* Map sorted object */}
				{Object.entries(MM_Menu).map(([genre, menuList]) => {
					const data = tabData[genre as keyof typeof tabData];
					const color = theme.palette.custom[data as keyof CustomPalette];

					return (
						<Box key={genre} sx={{mb: 6}}>
							{/* Genre Name */}
							<TitleWithMooch title={genre.replaceAll("_", " ").toUpperCase()} color={color} />

							{/* Menu Detail Component */}
							<GroupedMenu menuList={menuList} genre={genre} color={color} />
						</Box>
					);
				})}
			</Container>
		</Box>
	);
};

export default MenuList;
