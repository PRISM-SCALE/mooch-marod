import {Box, Grid, Typography, useTheme} from "@mui/material";

interface MenuItem {
	name: string;
	category: string;
	description: string;
	price: number;
	priority: number;
}

type Props = {
	menuList: MenuItem[];
};

const MenuDetail = ({menuList}: Props): JSX.Element => {
	const theme = useTheme();

	console.log(menuList);

	return (
		<>
			{menuList.map(({name, description, price}) => {
				return (
					<Grid item xs={12} md={6} key={name}>
						<Box sx={{width: {xs: "100%"}}}>
							<Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
								<Typography
									fontSize={{xs: "1.2rem", sm: "1.2rem"}}
									color={theme.palette.custom.paratha}
									fontWeight={600}
								>
									{name}
								</Typography>
								<Typography
									fontSize={{xs: "1.2rem", sm: "1.2rem"}}
									color={theme.palette.custom.achar}
									fontWeight={600}
								>
									₹{price}
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
