import {
	Box,
	List,
	ListItemButton,
	ListItemText,
	ListSubheader,
	Typography,
	useTheme,
} from "@mui/material";
// JSON DATA
import {MM_Menu} from "../../_mock/menuV2.json";

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

	selectedItem?: string;
	offsetTop?: number | null;
};

const category: Category = {
	parathas: "paratha",
	make_your_own_paratha: "pani",
	kebabs: "achar",
	lassi: "conceot",
};

const MenuNavigation = ({handleItemClick, handleClose, selectedItem, offsetTop}: Props) => {
	const theme = useTheme();
	// Grouped data returned from
	const groupedGenreData: GroupedMenuData = groupGenre(MM_Menu);

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
			subheader={
				<ListSubheader
					component="div"
					id="nested-list-subheader"
					sx={{
						fontWeight: 700,
						fontSize: "1.5rem",
						color: "black",
						padding: 0,
						mb: 4,
						textTransform: "uppercase",
					}}
				>
					Categories
					<Box
						component={"span"}
						sx={{
							display: "block",
							width: "100px",
							height: "2.5px",
							backgroundColor: theme.palette.custom.achar,
							// [theme.breakpoints.down("md")]: {display: "none"},
						}}
					/>
				</ListSubheader>
			}
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
							const targetElement = document.getElementById(
								category.replaceAll(" ", "_").toLowerCase()
							);

							let offsetPosition;

							if (targetElement) {
								const {top} = targetElement.getBoundingClientRect();
								offsetPosition = top;
							}

							return (
								<ListItemButton
									sx={{
										pl: 4,
										"&.Mui-selected": {
											borderLeft: "4px solid #333",
										},
									}}
									key={index}
									onClick={() => {
										handleItemClick(`${category.replaceAll(" ", "_").toLowerCase()}`);
										if (handleClose) {
											handleClose();
										}
									}}
									selected={
										selectedItem === category.replaceAll(" ", "_").toLowerCase() ||
										offsetPosition === offsetTop
									}
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
