import {Box, Grid, Typography, useTheme} from "@mui/material";
import {MenuItem, MenuPrice} from "../types/Menu.types";

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
						<Box
							sx={{
								width: {xs: "100%"},
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Box>
								<Typography
									fontSize={{xs: "1rem", sm: "1.2rem"}}
									color={theme.palette.custom.paratha}
									fontWeight={600}
								>
									{name}
								</Typography>
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

							<Box sx={{display: "flex", gap: 2}}>
								{price.map(({type, rate, inch}: MenuPrice) => {
									return <PricingList key={type} type={type} rate={rate} inch={inch} />;
								})}
							</Box>
						</Box>
					</Grid>
				);
			})}
		</>
	);
};

const PricingList = ({type, rate, inch}: MenuPrice) => {
	const theme = useTheme();
	return (
		<Box sx={{display: "flex", flexDirection: "column"}}>
			<Typography fontSize={{xs: ".915rem"}} color={theme.palette.custom.achar} fontWeight={600}>
				{type} {inch ? `${inch}"` : null}
			</Typography>
			<Typography fontSize={{xs: ".8rem"}} color={theme.palette.custom.achar} fontWeight={600}>
				₹{rate}
			</Typography>
		</Box>
	);
};

export default MenuDetail;
