import {Box, Grid, Typography, useTheme} from "@mui/material";
import {MenuItem} from "../utils/groupby";

type Props = {
	menuList: MenuItem[];
};

const MenuDetail = ({menuList}: Props): JSX.Element => {
	const theme = useTheme();

	return (
		<>
			{menuList.map(({name, description, price}) => {
				return (
					<Grid item xs={12} md={6} key={name}>
						<Box sx={{width: {xs: "100%"}}}>
							<Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
								<Typography
									fontSize={{xs: "1rem", sm: "1.2rem"}}
									color={theme.palette.custom.paratha}
									fontWeight={600}
								>
									{name}
								</Typography>
								<Typography
									fontSize={{xs: "1rem", sm: "1.2rem"}}
									color={theme.palette.custom.achar}
									fontWeight={600}
								>
									₹{price}+
								</Typography>
							</Box>
							<Typography
								variant="caption"
								fontSize={"0.8rem"}
								width={"65%"}
								display={"block"}
								mb={2}
							>
								{description}
							</Typography>
						</Box>
					</Grid>
				);
			})}
		</>
	);
};

export default MenuDetail;
