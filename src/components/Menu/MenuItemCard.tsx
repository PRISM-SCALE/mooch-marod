import {Box, Grid, Typography, useTheme} from "@mui/material";

// TYPES
import {MenuItem} from "../../types/Menu.types";

// COMPONENTS
import Iconify from "../Iconify";

type Props = {
	list: MenuItem[];
};

const MenuItemCard = ({list}: Props) => {
	const theme = useTheme();
	return (
		<>
			{list.map(({name, description, price, isVeg}) => {
				return (
					<Grid item xs={12} md={6} sx={{mb: 2}}>
						<Box
							sx={{
								width: {xs: "100%"},
								display: "flex",
								justifyContent: "space-between",
								[theme.breakpoints.down("sm")]: {
									flexDirection: "column",
								},
							}}
						>
							<Box>
								<Box sx={{display: "flex", alignItems: "center", gap: 1}}>
									<Typography
										fontSize={{xs: "1rem", sm: "1.2rem"}}
										color={theme.palette.custom.achar}
										fontWeight={600}
									>
										{name}
									</Typography>
									{isVeg ? (
										<Iconify icon={"openmoji:leafy-green"} size={25} />
									) : (
										<Iconify icon={"openmoji:meat-on-bone"} size={25} />
									)}
								</Box>
								<Typography
									variant="caption"
									fontSize={"0.8rem"}
									width={{xs: "100%", sm: "85%"}}
									display={"block"}
								>
									{description}
								</Typography>
							</Box>
							<Box>
								<Box component={"img"} sx={{maxWidth: "100%", height: "auto"}} src="" alt={name} />
							</Box>
						</Box>
					</Grid>
				);
			})}
		</>
	);
};

export default MenuItemCard;
