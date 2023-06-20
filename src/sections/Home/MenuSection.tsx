import {useState} from "react";
import {Link} from "react-router-dom";
import {alpha, styled} from "@mui/material/styles";
import {Box, Button, Container, Grid, Fade, Tab, Tabs, Typography, useTheme} from "@mui/material";

// JSON DATA
import {FK_Menu} from "../../_mock/menuV2.json";

// UTILS
import {a11yProps} from "../../utils/tabs";
import {groupCategory} from "../../utils/groupby";

// COMPONENTS
import TabPanelWrapper from "../../components/TabPanelWrapper";
import MenuDetail from "../../components/Menu/MenuDetail";
import MenuItemCard from "../../components/Menu/MenuItemCard";

interface StyledTabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
	centered?: boolean;
}

interface StyledTabProps {
	label: string;
	sx: object;
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
	momos: "paratha",
	"sizzler chinese momos": "pani",
	"sizzler chinese starters": "achar",
	"sizzlers chinese fried rice/noodles": "conceot",
};

const StyledTabs = styled((props: StyledTabsProps) => (
	<Tabs {...props} TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan" />}} />
))(({theme}) => ({
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

	"& .MuiTabs-flexContainer": {
		flexWrap: "wrap",
		justifyContent: "center",
		[theme.breakpoints.between("xs", "sm")]: {
			// justifyContent: "space-evenly",
		},
	},
}));

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
	({theme}) => ({
		textTransform: "uppercase",
		fontWeight: theme.typography.fontWeightMedium,
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		color: alpha(theme.palette.common.black, 0.7),
		marginTop: 8,

		"&.Mui-focusVisible": {
			backgroundColor: "transparent",
		},
	})
);

const MenuSection = () => {
	const theme = useTheme();
	const [value, setValue] = useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const groupedCategoryData = groupCategory(FK_Menu);

	return (
		<Box component="section" id="menu_section" py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
				{/* TITLE FOR THE SECTION */}
				<Box sx={{textAlign: "center"}}>
					<Typography
						variant="caption"
						sx={{color: theme.palette.custom.achar, fontSize: {xs: "0.8rem"}}}
					>
						PICK YOUR FAVORITES
					</Typography>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}}}
						gutterBottom
					>
						<Box component={"span"} fontWeight={500}>
							Food Kasoot's
						</Box>{" "}
						Sizzlers, THE BEST IN TOWN
					</Typography>
					<Typography variant="body1" sx={{width: {xs: "100%", md: "50%"}, marginX: "auto"}}>
						Vibrant shots of sizzling platters and mouthwatering dishes, Where Flavors Ignite and
						Tantalize. Elevating the Sizzle Experience
					</Typography>
				</Box>

				{/* TAB BUTTONS */}
				<Box sx={{mt: "1rem"}}>
					<StyledTabs value={value} onChange={handleChange}>
						{Object.keys(groupedCategoryData).map((genre, index) => {
							const data = tabData[genre as keyof typeof tabData];
							const color = theme.palette.custom[data as keyof CustomPalette];

							return (
								<StyledTab
									key={genre}
									label={genre.replaceAll("_", " ")}
									sx={{
										borderRadius: 30,
										border: `3px solid ${alpha(color, 0.7)}`,
										paddingX: "2rem",
										marginLeft: "1rem",
										fontWeight: 600,

										transition: theme.transitions.create(["background", "color"], {
											duration: 400,
											easing: "ease-out",
										}),

										"&:hover": {
											background: color,
											color: theme.palette.custom.butter,
										},

										"&.Mui-selected": {
											color: theme.palette.custom.butter,
											background: color,
										},
									}}
									{...a11yProps(index)}
								/>
							);
						})}
					</StyledTabs>
				</Box>

				{/* MENU LIST */}
				<Box sx={{mt: "4rem"}}>
					{/* MAP THE MENU LIST */}
					{Object.entries(groupedCategoryData).map(([category, menuList], index) => (
						<TabPanelWrapper key={category} value={value} index={index}>
							<Fade
								in={value === index}
								timeout={{enter: 900, exit: 1500}}
								mountOnEnter
								unmountOnExit
							>
								<Grid container columnSpacing={4}>
									{/* MAPPING THE MENU-LIST */}
									<MenuItemCard list={menuList.slice(0, 10)} />
								</Grid>
							</Fade>
						</TabPanelWrapper>
					))}

					<Box textAlign={"center"} mt={6}>
						<Button
							component={Link}
							to="/menu"
							sx={{
								borderRadius: 30,
								background: theme.palette.custom.achar,
								"&:hover": {
									background: theme.palette.custom.achar,
								},
								color: theme.palette.custom.butter,
								py: ".8rem",
								px: "2rem",
								boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px",
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

export default MenuSection;

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
