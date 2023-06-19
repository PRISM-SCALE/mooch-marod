import {Box, Grid, Typography, useTheme} from "@mui/material";
import {MenuItem, MenuPrice} from "../../types/Menu.types";
import Iconify from "../Iconify";

type Props = {
	list: MenuItem[];
};

const MenuDetail = ({list}: Props): JSX.Element => {
	const theme = useTheme();

	return (
		<>
			{list.map(({name, description, price, isVeg}) => {
				return (
					<Grid item xs={12} md={6} key={name} sx={{mb: 2}}>
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
										color={isVeg ? "#036F08" : theme.palette.custom.achar}
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

							<Box
								sx={{
									display: "flex",
									gap: 2,
									[theme.breakpoints.down("sm")]: {
										mt: 1,
									},
								}}
							>
								{price.map(({type, rate, inch}: MenuPrice, index) => {
									return <PricingList key={index} type={type} rate={rate} inch={inch} />;
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
			<Typography
				fontSize={{xs: ".925rem"}}
				color={theme.palette.custom.achar}
				fontWeight={600}
				sx={{textTransform: "capitalize"}}
			>
				{type}
			</Typography>

			<Typography
				fontSize={{xs: ".925rem"}}
				color={theme.palette.custom.achar}
				fontWeight={600}
				sx={{textTransform: "capitalize"}}
			>
				{inch ? `${inch}"` : null}
			</Typography>
			<Typography fontSize={{xs: ".925rem"}} color={theme.palette.custom.achar} fontWeight={600}>
				₹{rate}
			</Typography>
		</Box>
	);
};

export default MenuDetail;
