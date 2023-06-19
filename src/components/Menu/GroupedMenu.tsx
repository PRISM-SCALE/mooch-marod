import {Box, Grid, Typography, useTheme} from "@mui/material";

// TYPES
import {MenuItem} from "../../types/Menu.types";

// UTILS
import {groupCategory} from "../../utils/groupby";

// COMPONENTS
import MenuDetail from "./MenuDetail";

type Props = {
	menuList: MenuItem[];
	genre?: string;
	color?: string;
};

const GroupedMenu: React.FC<Props> = ({menuList, genre, color}: Props) => {
	const theme = useTheme();
	const groupedMenuData = groupCategory(menuList);

	return (
		<Grid container columnSpacing={2}>
			{Object.entries(groupedMenuData).map(([category, list], index) => {
				return (
					<Grid item container columnSpacing={4} xs={12} key={index} sx={{mb: 4}}>
						<Grid item xs={12} sx={{mb: 2}}>
							{category === genre ? null : (
								<>
									<Typography
										sx={{
											textTransform: "uppercase",
											fontWeight: 700,
											fontSize: {xs: "1.125rem", md: "1.5rem"},
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
							)}
						</Grid>
						<MenuDetail list={list} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default GroupedMenu;
