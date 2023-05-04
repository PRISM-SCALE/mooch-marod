import {useState} from "react";
import {alpha, styled} from "@mui/material/styles";
import {Box, Button, Container, Grid, Tab, Tabs, Typography, useTheme} from "@mui/material";

// COMPONENTS
import TabPanelWrapper from "../../components/TabPanelWrapper";
import MenuDetail from "../../components/MenuDetail";

// JSON DATA
import {menu} from "../../_mock/menu.json";

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

interface StyledTabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
	centered: boolean;
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

const StyledTabs = styled((props: StyledTabsProps) => (
	<Tabs {...props} TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan" />}} />
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
	},

	"& .MuiTabs-indicatorSpan": {
		maxWidth: 0,
		width: 0,
		backgroundColor: "red",
	},
});

interface StyledTabProps {
	label: string;
	sx: object;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
	({theme}) => ({
		textTransform: "uppercase",
		fontWeight: theme.typography.fontWeightMedium,
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		color: alpha(theme.palette.common.black, 0.7),

		"&.Mui-focusVisible": {
			backgroundColor: "transparent",
		},
	})
);

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

const Menu = () => {
	const theme = useTheme();
	const [value, setValue] = useState(0);
	// const [menuItems, setMenuItems] = useState<MenuItem[] | null>();

	const menuData: MenuItem[] = menu;

	const groupedMenuData: GroupedMenuData = {};

	menuData.forEach((menuItem) => {
		if (groupedMenuData[menuItem.category]) {
			groupedMenuData[menuItem.category].push(menuItem);
		} else {
			groupedMenuData[menuItem.category] = [menuItem];
		}
	});

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<Box component="section" id="menu_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				{/* TITLE FOR THE SECTION */}
				<Box sx={{textAlign: "center"}}>
					<Typography
						variant="caption"
						sx={{color: theme.palette.custom.achar, fontSize: {xs: "0.8rem", md: "1rem"}}}
					>
						PICK YOUR FAVORITES
					</Typography>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}}}
						gutterBottom
					>
						Mooch Marod's Paratha, THE BEST IN TOWN
					</Typography>
					<Typography variant="body1" sx={{width: {xs: "100%", md: "50%"}, marginX: "auto"}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium
						molestie. Interdum et malesuada fames ac.
					</Typography>
				</Box>

				{/* TAB BUTTONS */}
				<Box sx={{mt: "1rem"}}>
					<StyledTabs value={value} onChange={handleChange} centered>
						{Object.entries(groupedMenuData).map(([category, menuList], index) => {
							const data = tabData[category as keyof typeof tabData];
							const color = theme.palette.custom[data as keyof CustomPalette];

							return (
								<StyledTab
									key={category}
									label={category}
									sx={{
										borderRadius: 30,
										border: `3px solid ${alpha(color, 0.7)}`,
										paddingX: "2rem",
										marginLeft: "1rem",

										"&.Mui-selected": {
											color: theme.palette.custom.butter,
											background: color,
											dropShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
										},
									}}
									{...a11yProps(index)}
								/>
							);
						})}
					</StyledTabs>
				</Box>

				{/* MENUS LIST */}
				<Box sx={{mt: "4rem"}}>
					{Object.entries(groupedMenuData).map(([category, menuList], index) => (
						<TabPanelWrapper key={category} value={value} index={index}>
							<Grid container columnSpacing={4}>
								{/* MAPPING THE MENU-LIST */}
								<MenuDetail menuList={menuList} />
							</Grid>
						</TabPanelWrapper>
					))}

					<Box textAlign={"center"} mt={6}>
						<Button
							sx={{
								borderRadius: 30,
								background: theme.palette.custom.achar,
								"&:hover": {
									background: theme.palette.custom.achar,
								},
								color: theme.palette.custom.butter,
								py: ".8rem",
								px: "2rem",
							}}
						>
							Show More
						</Button>
						<Typography variant="caption" mt={4} display={"block"}>
							* Offers available for carry-out and delivery orders only.
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Menu;

/*
const items = Array.from(Array(10).keys());

<Grid container spacing={2}>
  {items.map((item) => (
    <Grid item xs={12} md={6} key={item}>
      <Paper>{`Item ${item + 1}`}</Paper>
    </Grid>
  ))}
</Grid> 
*/
