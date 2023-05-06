import {Avatar, Box, Rating, Typography, useTheme} from "@mui/material";
import Iconify from "./Iconify";

type Props = {
	rating: number;
	name: string;
	reviewText: string;
	image?: string;
	location: string;
};

const TestimonialCard = ({rating, name, reviewText, location}: Props) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-end",
				justifyContent: "space-between",
				width: {xs: "100%", sm: "70%"},
				mx: "auto",
				// boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
				border: "1px solid rgb(0 0 0 / 0.1)",
				borderRadius: 3,
			}}
		>
			{/* <Box
				sx={{
					width: "100%",
					// maxWidth: {xs: 220, md: 320},
					margin: "auto",
					overflow: "hidden",
					padding: 0,
				}}
			>
				<img
					src={image}
					alt="Your image description"
					style={{width: "100%", objectFit: "cover", borderRadius: "5px"}}
				/>
			</Box> */}

			<Box sx={{p: 4}}>
				<Iconify icon={"bxs:quote-alt-left"} size={52} color={theme.palette.custom.achar} />
				<Typography variant="body1" mb={3} width={{xs: "100%"}} sx={{fontSize: "1rem", mt: 4}}>
					{reviewText}
				</Typography>

				<Box sx={{display: "flex", columnGap: 2}}>
					<Avatar src="/icons/google.svg" />
					<Box>
						<Typography fontWeight={600} fontSize={22}>
							{name}
						</Typography>
						<Typography variant="caption" display={"block"} mb={1}>
							{location}
						</Typography>
					</Box>
				</Box>
				<Rating value={rating} readOnly />
			</Box>
		</Box>
	);
};

export default TestimonialCard;
