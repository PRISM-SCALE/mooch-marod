import {Box, Fab, IconButton, Paper, Popover, useTheme} from "@mui/material";
import {useRef, useState} from "react";

// JSON DATA
import {MM_Menu} from "../../_mock/menuV2.json";

// UTILS
import {groupGenre} from "../../utils/groupby";

// TYPES
import {GroupedMenuData} from "../../types/Menu.types";

// COMPONENTS
import TitleWithMooch from "../../components/TitleWithMooch";
import GroupedMenu from "../../components/Menu/GroupedMenu";
import MenuNavigation from "../../components/Menu/MenuNavigation";
import {useResponsive} from "../../hooks/useResponsive";
import Iconify from "../../components/Iconify";

interface CustomPalette {
	paratha: string;
	pani: string;
	achar: string;
	conceot: string;
}

type Category = {
	[key: string]: string;
};

const category: Category = {
	parathas: "paratha",
	make_your_own_paratha: "pani",
	kebabs: "achar",
	lassi: "conceot",
};

const MenuDasboard = () => {
	const theme = useTheme();
	const {mediumScreenAndUp} = useResponsive();
	const containerRef = useRef<HTMLDivElement>(null);
	const [selectedItem, setSelectedItem] = useState("");
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (mediumScreenAndUp) {
			setAnchorEl(null);
		}
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		if (mediumScreenAndUp) {
			setAnchorEl(null);
		}

		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	// ITEM: `${category.replaceAll(" ", "_").toLowerCase()}`
	const handleItemClick = (item: string) => {
		setSelectedItem(item);
		const selectedElement = document.getElementById(item); // Assumes unique IDs

		selectedElement && selectedElement.scrollIntoView({behavior: "smooth", block: "center"});

		// if (selectedElement && containerRef.current) {
		// 	const customOffset = -100; // Customize the offset value as per your needs
		// 	const containerTop = containerRef.current.offsetTop;
		// 	const selectedTop = selectedElement.offsetTop - containerTop;
		// 	containerRef.current.scrollTo({
		// 		top: selectedTop - customOffset,
		// 		behavior: "smooth",
		// 	});
		// }
		console.log(`YOU HAVE SCROLLED TO ${selectedItem}`);
	};

	const groupedGenreData: GroupedMenuData = groupGenre(MM_Menu);

	return (
		<Box component="section" id="main_menu_section" sx={{position: "relative"}}>
			<Box
				ref={containerRef}
				sx={{
					py: {xs: "2rem", md: "4rem"},
					display: "flex",
					gap: 2,
					p: 2,
				}}
			>
				{mediumScreenAndUp ? (
					<Paper
						elevation={1}
						sx={{position: "sticky", top: "100px", width: 300, maxHeight: 640, py: 2}}
					>
						<MenuNavigation handleItemClick={handleItemClick} />
					</Paper>
				) : (
					<>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							sx={{
								"	.MuiPopover-root": {
									maxWidth: "700px",
								},
							}}
						>
							<IconButton
								sx={{
									position: "absolute",
									top: 5,
									right: 5,
									color: theme.palette.custom.achar,
									cursor: "pointer",
									zIndex: 30,
								}}
								onClick={handleClose}
							>
								<Iconify icon={"ph:x-circle-bold"} size={24} />
							</IconButton>
							<MenuNavigation handleItemClick={handleItemClick} />
						</Popover>
						<Fab
							sx={{
								position: "fixed",
								bottom: 80,
								right: 16,
								backgroundColor: theme.palette.custom.achar,
								color: theme.palette.custom.butter,
								"&:hover": {
									backgroundColor: theme.palette.custom.achar,
									color: theme.palette.custom.butter,
								},
							}}
							onClick={handleClick}
							disableFocusRipple
						>
							<Iconify icon={"ic:round-restaurant-menu"} size={24} />
						</Fab>
					</>
				)}

				<Box
					sx={{
						width: {xs: "100%", md: "80%"},
						// height: {xs: "10500px", md: "6500px"},
						flex: 1,
					}}
				>
					{/* Map sorted object */}
					{Object.entries(groupedGenreData).map(([genre, menuList]) => {
						const data = category[genre as keyof typeof category];
						const color = theme.palette.custom[data as keyof CustomPalette];

						return (
							<Box
								key={genre}
								sx={{
									mb: 6,
									[theme.breakpoints.up("md")]: {
										px: 8,
									},
								}}
							>
								{/* Genre Name */}
								<TitleWithMooch title={genre.replaceAll("_", " ").toUpperCase()} color={color} />

								{/* Menu Detail Component */}
								<GroupedMenu menuList={menuList} genre={genre} color={color} />
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default MenuDasboard;
