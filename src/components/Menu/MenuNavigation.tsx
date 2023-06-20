import {Box, List, ListItemButton, ListItemText, Typography, useTheme} from "@mui/material";
// JSON DATA
import {FK_Menu} from "../../_mock/menuV2.json";

// UTILS
import {groupCategory, groupGenre} from "../../utils/groupby";

// TYPES
import {GroupedMenuData} from "../../types/Menu.types";

interface CustomPalette {
	paratha: string;
	pani: string;
	achar: string;
	conceot: string;
}

type Category = {
	[key: string]: string;
};

type Props = {
	handleItemClick: (item: string) => void;
	handleClose?: () => void;
};

const category: Category = {
	parathas: "paratha",
	make_your_own_paratha: "pani",
	kebabs: "achar",
	lassi: "conceot",
};

const MenuNavigation = ({handleItemClick, handleClose}: Props) => {
	const theme = useTheme();
	// Grouped data returned from
	const groupedGenreData: GroupedMenuData = groupGenre(FK_Menu);

	return (
		<List
			id="menu_navigation"
			component="nav"
			sx={{
				width: 500,
				maxWidth: 300,
				// overflow: "auto",
				// maxHeight: "50vh",
				px: 2,
				py: 3,
			}}
		>
			{Object.entries(groupedGenreData).map(([genre, value], index) => {
				const groupedCategoryData: GroupedMenuData = groupCategory(value);
				const data = category[genre as keyof typeof category];
				const color = theme.palette.custom[data as keyof CustomPalette];

				return (
					<Box role="presentation" key={index} sx={{mb: 2}}>
						{/* GENRE */}
						<Typography sx={{fontWeight: 700, textTransform: "uppercase", color: color}}>
							{genre.replaceAll("_", " ")}
						</Typography>

						{Object.keys(groupedCategoryData).map((category, index) => {
							return (
								<ListItemButton
									sx={{pl: 4}}
									key={index}
									onClick={() => {
										handleItemClick(`${category.replaceAll(" ", "_").toLowerCase()}`);
										if (handleClose) {
											handleClose();
										}
									}}
								>
									<ListItemText primary={category} sx={{textTransform: "capitalize"}} />
								</ListItemButton>
							);
						})}
					</Box>
				);
			})}
		</List>
	);
};

export default MenuNavigation;
