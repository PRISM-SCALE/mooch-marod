import {Box, Grid, Typography, useTheme} from "@mui/material";

// TYPES
import {MenuItem} from "../../types/Menu.types";

// UTILS
import {groupCategory} from "../../utils/groupby";

// COMPONENTS
import MenuItemCard from "./MenuItemCard";
import {useResponsive} from "../../hooks/useResponsive";

type Props = {
	menuList: MenuItem[];
	genre?: string;
	color?: string;
};

const GroupedMenu: React.FC<Props> = ({menuList, genre, color}: Props) => {
	const theme = useTheme();
	const {mediumScreenAndUp} = useResponsive();
	const groupedMenuData = groupCategory(menuList);

	return (
		<Grid container columnSpacing={2} sx={{overflow: "auto"}}>
			{Object.entries(groupedMenuData).map(([category, list], index) => {
				return (
					<Grid
						item
						container
						columnSpacing={mediumScreenAndUp ? 4 : 0}
						xs={12}
						key={index}
						sx={{mb: 4}}
					>
						<Box id={`${category.replaceAll(" ", "_").toLowerCase()}`} />
						<Grid item xs={12} sx={{mb: 2}}>
							<>
								<Typography
									sx={{
										textTransform: "uppercase",
										fontWeight: 700,
										fontSize: {xs: "1.625rem", md: "1.5rem"},
										color: color,
									}}
								>
									{category}
								</Typography>
								<Box
									sx={{
										width: "100px",
										height: "2.5px",
										backgroundColor: color,
										[theme.breakpoints.down("md")]: {display: "none"},
									}}
								/>
							</>
						</Grid>
						<MenuItemCard list={list} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default GroupedMenu;
