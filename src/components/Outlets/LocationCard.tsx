import {Box, Button, Typography, useTheme} from "@mui/material";
import Iconify from "../Iconify";
import {Link} from "react-router-dom";

type Props = {
	location: string;
	address: string;
	phone: number | string;
	time: string;
	direction: string;
	onClick?: () => void;
};

const LocationCard = ({location, address, phone, time, direction, onClick}: Props) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				mb: 2,
				borderRadius: 0,
				width: "100%",
				maxWidth: "100%",
			}}
		>
			<Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
				{/* IMAGE */}
				{/* {!isSmallScreen && (
					<Box sx={{flex: 1, maxWidth: {xs: "100%", sm: 200}, alignSelf: "center"}}>
						<img
							style={{height: 250, width: "100%", objectFit: "cover"}}
							src="/images/resto.jpg"
							alt={location}
						/>
					</Box>
				)} */}

				{/* CONTENT */}
				<Box sx={{p: 2}}>
					<Typography
						variant="h2"
						fontWeight={500}
						sx={{
							fontSize: {xs: "1.1rem", sm: "1.3rem", md: "1.5rem"},
							color: theme.palette.custom.paratha,
						}}
					>
						{location}
					</Typography>
					<Typography variant="body1" sx={{width: {xs: "100%"}}} gutterBottom>
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
						component={Link}
						to={direction}
						target="_blank"
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
						Get Directions
					</Button>
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
