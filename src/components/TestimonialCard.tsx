import {Box, Rating, Typography} from "@mui/material";

type Props = {
	rating: number;
	name: string;
	reviewText: string;
	image: string;
};

const TestimonialCard = ({rating, name, reviewText, image}: Props) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-end",
				justifyContent: "sapce-between",
				width: "60%",
				mx: "auto",
			}}
		>
			<Box
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
			</Box>

			<Box sx={{p: 4}}>
				<Typography variant="body1" mb={3} width={{xs: "100%"}}>
					{reviewText}
				</Typography>
				<Typography fontWeight={600} fontSize={18}>
					{name}
				</Typography>
				<Typography variant="caption" display={"block"} mb={1}>
					Google Review
				</Typography>

				<Rating value={rating} />
			</Box>
		</Box>
	);
};

export default TestimonialCard;
