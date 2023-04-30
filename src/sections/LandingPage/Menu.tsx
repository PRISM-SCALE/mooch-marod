import {useState} from "react";
import {alpha, styled} from "@mui/material/styles";
import {Box, Container, Tab, Tabs, Typography, useTheme} from "@mui/material";

//  COMPONENTS
import TabPanelWrapper from "../../components/TabPanelWrapper";
import MenuDetail from "../../components/MenuDetail";

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
	paratha: "parathas",
	pani: "lassi",
	achar: "starters",
	conceot: "food kasoot",
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

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		// console.log(event);
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
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 32}}}
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
						{Object.entries(tabData).map(([key, value], index) => {
							// const color = theme.palette.custom[value as keyof CustomPalette];
							const color = theme.palette.custom[key as keyof CustomPalette];
							return (
								<StyledTab
									key={key}
									label={value}
									sx={{
										borderRadius: 30,
										border: `3px solid ${alpha(color, 0.7)}`,
										paddingX: "2rem",
										marginLeft: "1rem",

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

				{/* MENUS */}
				<Box sx={{mt: "4rem"}}>
					<TabPanelWrapper value={value} index={0}>
						<MenuDetail
							foodItem="Chicago Dog"
							price={10}
							description="All beef hot dog, pickles, red onion, pepperoncini, and tomato."
						/>
					</TabPanelWrapper>
				</Box>
			</Container>
		</Box>
	);
};

export default Menu;

/*
generate a menu json data with the following categories parathas, lassi, starters and food kasoot with 5 or more data for each categories
*/