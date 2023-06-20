import {Box, Grid, Typography, useTheme} from "@mui/material";
import {useLocation} from "react-router-dom";

// TYPES
import {MenuItem, MenuPrice} from "../../types/Menu.types";

// COMPONENTS
import Iconify from "../Iconify";

type Props = {
	list: MenuItem[];
};

const MenuItemCard = ({list}: Props) => {
	const theme = useTheme();
	const {pathname} = useLocation();

	return (
		<>
			{list.map(({name, description, price, isVeg}) => {
				return (
					<Grid item xs={12} md={6} sx={{mb: 2}} key={description}>
						<Box
							sx={{
								width: {xs: "100%"},
								display: "flex",
								justifyContent: "space-between",
								[theme.breakpoints.down("sm")]: {
									flexDirection: "row-reverse",
									justifyContent: "flex-end",
									gap: 2,
								},
							}}
						>
							<Box>
								<Box sx={{display: "flex", alignItems: "center", flex: 1}}>
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
								{/* {pathname === "/home" ? null : (
								)} */}
								<Box
									sx={{
										display: "flex",
										gap: 2,
										[theme.breakpoints.down("sm")]: {
											mt: 1,
										},
									}}
								>
									{price.map((priceDetails: MenuPrice) => {
										const {type, rate, inch} = priceDetails;

										return <PricingList key={type} type={type} rate={rate} inch={inch} />;
									})}
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
								<Box
									component={"img"}
									sx={{
										maxWidth: "100px",
										[theme.breakpoints.up("md")]: {
											maxWidth: "100%",
											height: "auto",
										},
									}}
									src="/images/menu_image.png"
									alt={name}
								/>
							</Box>
						</Box>
					</Grid>
				);
			})}
		</>
	);
};

const PricingList = (data: MenuPrice) => {
	const {rate, type} = data;
	const theme = useTheme();
	return (
		<Box sx={{display: "flex", flexDirection: "column"}}>
			<Typography fontSize={{xs: ".625rem"}} color={theme.palette.custom.paratha} fontWeight={600}>
				{type.toUpperCase()}
			</Typography>
			<Typography fontSize={{xs: ".975rem"}} color={theme.palette.custom.conceot} fontWeight={600}>
				₹{rate}
			</Typography>
		</Box>
	);
};

export default MenuItemCard;
