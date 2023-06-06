import {Box, Button, Card, CardContent, CardMedia, Typography, useTheme} from "@mui/material";
import Iconify from "../Iconify";
import {useResponsive} from "../../hooks/useResponsive";

type Props = {
	location: string;
	address: string;
	phone: number | string;
	time: string;
	onClick?: () => void;
};

const LocationCard = ({location, address, phone, time, onClick}: Props) => {
	const theme = useTheme();
	const {isSmallScreen} = useResponsive();
	return (
		<Box sx={{mb: 2, borderRadius: 0}}>
			<Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
				{/* IMAGE */}
				{!isSmallScreen && (
					<Box sx={{flex: 1, maxWidth: {xs: "100%", sm: 200}, alignSelf: "center"}}>
						<img
							style={{height: 250, width: "100%", objectFit: "cover"}}
							src="/images/resto.jpg"
							alt={location}
						/>
					</Box>
				)}

				{/* CONTENT */}
				<Box sx={{flex: 1, p: 2}}>
					<Typography variant="h2" fontWeight={500}>
						{location}
					</Typography>
					<Typography variant="body1" gutterBottom>
						{address}
					</Typography>

					<Box sx={{display: "flex", alignItems: "center", mb: 2, gap: 2}}>
						<Iconify icon="ph:phone-fill" size={30} />
						<Typography>+91 {phone}</Typography>
					</Box>

					<Box sx={{display: "flex", alignItems: "center", gap: 2}}>
						<Iconify icon="charm:clock" size={30} />
						<Typography>{time}</Typography>
					</Box>
					<Button
						sx={{
							backgroundColor: theme.palette.custom.paratha,
							borderRadius: 30,
							px: {xs: 2, md: 4},
							py: 1,
							color: "white",
							mt: 4,
							fontSize: {xs: ".8rem", md: "1rem"},
							fontWeight: 400,
							"&:hover": {
								backgroundColor: theme.palette.custom.paratha,
							},
							mr: 2,
						}}
						onClick={onClick}
						disableElevation
						disableRipple
					>
						View in Map
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default LocationCard;
